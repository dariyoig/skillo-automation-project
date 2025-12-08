// Verify user can log out successfuly after login
// Verify user can log out successfuly after registration

import { test, expect } from "./fixtures/base";
import { makeRegistrationDataUnique } from "../utils/utils.js";
import registrationData from "../test-data/registrationData.json" assert { type: "json" };

test("Verify user can log out successfuly after login", async ({ loginPage, loggedInUser }) => {
  await loginPage.signOut();

  await expect(loginPage.successfulLogoutMessageLocator).toBeVisible();
});

test("Verify user can log out successfuly after registration", async ({ loginPage, registrationPage }) => {
  const testData = makeRegistrationDataUnique({ ...registrationData.validInputs[0] });

  await loginPage.navigateToRegistrationPage();
  await registrationPage.register(testData);
  await loginPage.signOut();

  await expect(loginPage.successfulLogoutMessageLocator).toBeVisible();
});
