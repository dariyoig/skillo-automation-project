// // Login tests specification file
// Test 1 - Verify successful login with valid form
// Test 2 - Verify successful login without checkbox checked
// Test 3 - Verify Sign in button is inactive when no username
// Test 4 - Verify Sign in button is inactive when no password
// Test 5 - Verify error message when user and pass are invalid

import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import loginData from "../test-data/loginData.json" assert { type: "json" };

test.describe("Successful login suite", () => {
  // Test 1 - Verify successful login with valid form
  test("Verify successful login with valid form", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToBasePage();
    await loginPage.click(loginPage.loginButtonLocator);

    await loginPage.usernameFieldLocator.fill(loginData.validUser.username);
    await loginPage.passwordFieldLocator.fill(loginData.validUser.password);
    await loginPage.rememberMeCheckboxLocator.check();
    await loginPage.click(loginPage.signInButtonLocator);
    await loginPage.page.waitForURL("**/posts/all");

    await expect(loginPage.loginButtonLocator).not.toBeVisible();
    await expect(loginPage.profileButtonLocator).toBeVisible();
    await expect(loginPage.successfullLoginMessageLocator).toBeVisible();
  });

  // Test 2 - Verify successful login without checkbox checked
  test("Verify successful login without checkbox checked", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToBasePage();
    await loginPage.click(loginPage.loginButtonLocator);

    await loginPage.usernameFieldLocator.fill(loginData.validUser.username);
    await loginPage.passwordFieldLocator.fill(loginData.validUser.password);
    await loginPage.click(loginPage.signInButtonLocator);
    await loginPage.page.waitForURL("**/posts/all");

    await expect(loginPage.loginButtonLocator).not.toBeVisible();
    await expect(loginPage.profileButtonLocator).toBeVisible();
    await expect(loginPage.successfullLoginMessageLocator).toBeVisible();
  });
});

test.describe("Unsuccessful login suite", () => {
  // Test 3 - Verify Sign in button is inactive when no username
  test("Verify Sign in button is inactive when no username", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToBasePage();
    await loginPage.click(loginPage.loginButtonLocator);
    await loginPage.usernameFieldLocator.fill("");

    await expect(loginPage.signInButtonLocator).toBeDisabled();
    await expect(loginPage.loginButtonLocator).toBeVisible();
    await expect(loginPage.profileButtonLocator).not.toBeVisible();
  });

  // Test 4 - Verify Sign in button is inactive when no password
  test("Verify Sign in button is inactive when no password", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToBasePage();
    await loginPage.click(loginPage.loginButtonLocator);
    await loginPage.passwordFieldLocator.fill("");

    await expect(loginPage.signInButtonLocator).toBeDisabled();
    await expect(loginPage.loginButtonLocator).toBeVisible();
    await expect(loginPage.profileButtonLocator).not.toBeVisible();
  });

  // Test 5 - Verify error message when user and pass are invalid
  test("Verify error message when user and pass are invalid", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToBasePage();
    await loginPage.click(loginPage.loginButtonLocator);

    await loginPage.usernameFieldLocator.fill(loginData.invalidUser.username);
    await loginPage.passwordFieldLocator.fill(loginData.invalidUser.password);
    await loginPage.rememberMeCheckboxLocator.check();
    await loginPage.click(loginPage.signInButtonLocator);

    await expect(loginPage.wrongUsernameOrPasswordMessageLocator).toBeVisible();
    await expect(loginPage.loginButtonLocator).toBeVisible();
    await expect(loginPage.profileButtonLocator).not.toBeVisible();
  });
});
