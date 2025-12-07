// // Logout tests specification file
//Test 1 - Verify user log out after login
//Test 2 - Verify user log out after registration

import { test, expect } from "./fixtures/base";
import registrationData from "../test-data/registrationData.json" assert { type: "json" };
import loginData from "../test-data/loginData.json" assert { type: "json" };

test("Verify user log out after login", async ({ loginPage, profilePage }) => {
  await loginPage.goToBasePage();
  await loginPage.click(loginPage.loginButtonLocator);

  await loginPage.usernameFieldLocator.fill(loginData.validUser.username);
  await loginPage.passwordFieldLocator.fill(loginData.validUser.password);
  await loginPage.rememberMeCheckboxLocator.check();
  await loginPage.click(loginPage.signInButtonLocator);

  await profilePage.click(profilePage.profileButtonLocator);
  await profilePage.page.waitForURL("**/users/**");
  await profilePage.click(profilePage.signOutButtonLocator);

  await expect(loginPage.successfullLogoutMessageLocator).toBeVisible();
});

test("Verify user log out after registration", async ({ loginPage, profilePage, registrationPage }) => {
  const testData = { ...registrationData.validInputs[0] };
  testData.username = registrationPage.appendTimestampBack(testData.username);
  testData.email = registrationPage.appendTimestampFront(testData.email);

  await loginPage.goToBasePage();
  await loginPage.click(loginPage.loginButtonLocator);

  await loginPage.click(loginPage.registerButtonLocator);

  await registrationPage.fillRegistrationForm(testData);
  await registrationPage.submitRegistrationForm();

  await profilePage.click(profilePage.profileButtonLocator);
  await profilePage.page.waitForURL("**/users/**");
  await profilePage.click(profilePage.signOutButtonLocator);

  await expect(loginPage.successfullLogoutMessageLocator).toBeVisible();
});
