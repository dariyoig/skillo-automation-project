// // Login tests specification file
// Test 1 - Verify successful login with valid form
// Test 2 - Verify successful login without checkbox checked
// Test 3 - Verify Sign in button is inactive when no username
// Test 4 - Verify Sign in button is inactive when no password
// Test 5 - Verify error message when user and pass are invalid

import { test, expect } from "./fixtures/base";
import loginData from "../test-data/loginData.json" assert { type: "json" };

test.beforeEach(async ({ loginPage }) => {
  await loginPage.navigateToLoginPage();
});

test.describe("Successful login suite", () => {
  test("Verify successful login with valid form", async ({ loginPage }) => {
    await loginPage.login(loginData.validUser.username, loginData.validUser.password, true);
    await loginPage.waitForUrl("**/posts/all");

    await expect(loginPage.loginButtonLocator).not.toBeVisible();
    await expect(loginPage.profileButtonLocator).toBeVisible();
    await expect(loginPage.successfulLoginMessageLocator).toBeVisible();
  });

  test("Verify successful login without checkbox checked", async ({ loginPage }) => {
    await loginPage.login(loginData.validUser.username, loginData.validUser.password, false);
    await loginPage.waitForUrl("**/posts/all");

    await expect(loginPage.loginButtonLocator).not.toBeVisible();
    await expect(loginPage.profileButtonLocator).toBeVisible();
    await expect(loginPage.successfulLoginMessageLocator).toBeVisible();
  });
});

test.describe("Unsuccessful login suite", () => {
  test("Verify Sign in button is inactive when no username", async ({ loginPage }) => {
    await loginPage.fillLoginForm("", loginData.validUser.password, true);

    await expect(loginPage.signInButtonLocator).toBeDisabled();
    await expect(loginPage.loginButtonLocator).toBeVisible();
    await expect(loginPage.profileButtonLocator).not.toBeVisible();
  });

  test("Verify Sign in button is inactive when no password", async ({ loginPage }) => {
    await loginPage.fillLoginForm(loginData.validUser.username, "", true);

    await expect(loginPage.signInButtonLocator).toBeDisabled();
    await expect(loginPage.loginButtonLocator).toBeVisible();
    await expect(loginPage.profileButtonLocator).not.toBeVisible();
  });

  test("Verify error message when user and pass are invalid", async ({ loginPage }) => {
    await loginPage.login(loginData.invalidUser.username, loginData.invalidUser.password, true);

    await expect(loginPage.wrongUsernameOrPasswordMessageLocator).toBeVisible();
    await expect(loginPage.loginButtonLocator).toBeVisible();
    await expect(loginPage.profileButtonLocator).not.toBeVisible();
  });
});
