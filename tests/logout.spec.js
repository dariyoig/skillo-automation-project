// // Logout tests specification file
//Test 1 - Verify user log out from profile page after login
//Test 2 - Verify user log out from profile page after registration

import { test, expect } from "./fixtures/base";
import registrationData from "../test-data/registrationData.json" assert { type: "json" };
import { makeRegistrationDataUnique } from "../utils/utils.js";

test("Verify user log out from profile page after login", async ({ loginPage, profilePage, loggedInUser }) => {
  await profilePage.click(profilePage.profileButtonLocator);
  await profilePage.waitForUrl("**/users/**");
  await profilePage.click(profilePage.signOutButtonLocator);

  await expect(loginPage.successfullLogoutMessageLocator).toBeVisible();
});

test("Verify user log out from profile page after registration", async ({
  loginPage,
  profilePage,
  registrationPage,
}) => {
  const testData = makeRegistrationDataUnique({ ...registrationData.validInputs[0] });

  await loginPage.goToBasePage();
  await loginPage.click(loginPage.loginButtonLocator);

  await loginPage.click(loginPage.registerButtonLocator);

  await registrationPage.register(testData);

  await profilePage.click(profilePage.profileButtonLocator);
  await profilePage.waitForUrl("**/users/**");
  await profilePage.click(profilePage.signOutButtonLocator);

  await expect(loginPage.successfullLogoutMessageLocator).toBeVisible();
});
