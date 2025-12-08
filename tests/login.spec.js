// Verify successful login with valid data
// Verify successful login without checkbox checked
// Verify Sign in button is inactive when no username
// Verify Sign in button is inactive when no password
// Verify error message when user and pass are invalid

import { test, expect } from "./fixtures/base";
import loginData from "../test-data/loginData.json" assert { type: "json" };

const invalidUser = loginData.invalidUser;
const validUser = loginData.validUser;

test.beforeEach(async ({ loginPage }) => {
  await loginPage.navigateToLoginPage();
});

test.describe("Successful login suite", () => {
  test("Verify successful login with valid data", async ({ loginPage }) => {
    await loginPage.login(validUser.username, validUser.password, true);

    await expect(loginPage.successfulLoginMessageLocator).toBeVisible();
    await expect(loginPage.loginButtonLocator).not.toBeVisible();
    await expect(loginPage.profileButtonLocator).toBeVisible();
  });

  test("Verify successful login without checkbox checked", async ({ loginPage }) => {
    await loginPage.login(validUser.username, validUser.password, false);

    await expect(loginPage.successfulLoginMessageLocator).toBeVisible();
    await expect(loginPage.loginButtonLocator).not.toBeVisible();
    await expect(loginPage.profileButtonLocator).toBeVisible();
  });
});

test.describe("Unsuccessful login suite", () => {
  test("Verify Sign in button is inactive when no username", async ({ loginPage }) => {
    await loginPage.fillLoginForm("", validUser.password, true);

    await expect(loginPage.signInButtonLocator).toBeDisabled();
  });

  test("Verify Sign in button is inactive when no password", async ({ loginPage }) => {
    await loginPage.fillLoginForm(validUser.username, "", true);

    await expect(loginPage.signInButtonLocator).toBeDisabled();
  });

  test("Verify error message when user and pass are invalid", async ({ loginPage }) => {
    await loginPage.login(invalidUser.username, invalidUser.password, true);

    await expect(loginPage.wrongUsernameOrPasswordMessageLocator).toBeVisible();
    await expect(loginPage.loginButtonLocator).toBeVisible();
    await expect(loginPage.profileButtonLocator).not.toBeVisible();
  });
});
