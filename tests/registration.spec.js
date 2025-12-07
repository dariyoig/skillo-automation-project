// // Registration tests specification file
// Test 1 - Verify successfull registration
// Test 2 - Verify sign in button inactivity in case of missing input
// Test 3 - Verify sign in button inactivity in case of wrong input

import { test, expect } from "./fixtures/base";
import registrationData from "../test-data/registrationData.json" assert { type: "json" };
import { makeRegistrationDataUnique } from "../utils/utils.js";

const missingInputs = registrationData.missingInputs;
const invalidInputs = registrationData.invalidInputs;
const validInputs = registrationData.validInputs;

test.describe("Successful registration suite", () => {
  validInputs.forEach((dataSet) => {
    test(`Verify successfull registration in case of ${dataSet.case}`, async ({ loginPage, registrationPage }) => {
      const testData = makeRegistrationDataUnique({ ...dataSet });

      await loginPage.goToBasePage();
      await loginPage.click(loginPage.loginButtonLocator);
      await loginPage.click(loginPage.registerButtonLocator);

      await registrationPage.register(testData);

      await expect(registrationPage.successfullRegisterMessageLocator).toBeVisible();
    });
  });
});

test.describe("Unsuccessful registration suite", () => {
  missingInputs.forEach((dataSet) => {
    test(`Verify sign in button inactivity in case of ${dataSet.case}`, async ({ loginPage, registrationPage }) => {
      const testData = { ...dataSet };

      await loginPage.goToBasePage();
      await loginPage.click(loginPage.loginButtonLocator);
      await loginPage.click(loginPage.registerButtonLocator);

      await registrationPage.fillRegistrationForm(testData);

      await expect(registrationPage.regSigninButtonLocator).toBeDisabled();
    });
  });

  invalidInputs.forEach((dataSet) => {
    test(`Verify sign in button inactivity in case of ${dataSet.case}`, async ({ loginPage, registrationPage }) => {
      const testData = { ...dataSet };

      await loginPage.goToBasePage();
      await loginPage.click(loginPage.loginButtonLocator);
      await loginPage.click(loginPage.registerButtonLocator);

      await registrationPage.fillRegistrationForm(testData);

      await expect(registrationPage.regSigninButtonLocator).toBeDisabled();
    });
  });
});
