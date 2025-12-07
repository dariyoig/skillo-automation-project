// // Logout tests specification file
//Test 1 - Verify user log out from profile page after login
//Test 2 - Verify user log out from profile page after registration

import { test, expect } from "./fixtures/base";
import registrationData from "../test-data/registrationData.json" assert { type: "json" };
import { makeRegistrationDataUnique } from "../utils/utils.js";

test("Verify user log out from profile page after login", async ({ loginPage, loggedInUser }) => {
  await loginPage.click(loginPage.signOutButtonLocator);

  await expect(loginPage.successfullLogoutMessageLocator).toBeVisible();
});

test("Verify user log out from profile page after registration", async ({ loginPage, registrationPage }) => {
  const testData = makeRegistrationDataUnique({ ...registrationData.validInputs[0] });

  await loginPage.navigateToRegistrationPage();
  await registrationPage.register(testData);
  await registrationPage.click(registrationPage.signOutButtonLocator);

  await expect(registrationPage.successfullLogoutMessageLocator).toBeVisible();
});
