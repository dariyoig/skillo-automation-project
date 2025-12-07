// // Logout tests specification file
//Test 1 - Verify user log out after login
//Test 2 - Verify user log out after registration

import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { RegistrationPage } from "../pages/RegistrationPage";
import registrationData from "../test-data/registrationData.json" assert { type: "json" };
import loginData from "../test-data/loginData.json" assert { type: "json" };
import { ProfilePage } from "../pages/ProfilePage";

test("Verify user log out after login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);

  await loginPage.goToBasePage();
  await loginPage.click(loginPage.loginButtonLocator);

  await loginPage.usernameFieldLocator.fill(loginData.validUser.username);
  await loginPage.passwordFieldLocator.fill(loginData.validUser.password);
  await loginPage.rememberMeCheckboxLocator.check();
  await loginPage.click(loginPage.signInButtonLocator);

  await profilePage.click(profilePage.profileButtonLocator);
  await page.waitForURL("**/users/**");
  await profilePage.click(profilePage.signOutButtonLocator);

  await expect(loginPage.successfullLogoutMessageLocator).toBeVisible();
});

test("Verify user log out after registration", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);
  const registrationPage = new RegistrationPage(page);
  
  const testData = { ...registrationData.validInputs[0] };
  testData.username = registrationPage.appendTimestampBack(testData.username);
  testData.email = registrationPage.appendTimestampFront(testData.email);

  await loginPage.goToBasePage();
  await loginPage.click(loginPage.loginButtonLocator);

  await loginPage.click(loginPage.registerButtonLocator);

  await registrationPage.fillRegistrationForm(testData);
  await registrationPage.submitRegistrationForm();

  await profilePage.click(profilePage.profileButtonLocator);
  await page.waitForURL("**/users/**");
  await profilePage.click(profilePage.signOutButtonLocator);

  await expect(loginPage.successfullLogoutMessageLocator).toBeVisible();
});
