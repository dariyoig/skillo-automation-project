// // Registration tests specification file
// Test 1 - Verify successfull registration
// Test 2 - Verify sign in button inactivity in case of missing input
// Test 3 - Verify sign in button inactivity in case of wrong input

import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../pages/RegistrationPage";
import registrationData from "../test-data/registrationData.json" assert { type: "json" };
import { LoginPage } from "../pages/LoginPage";

const missingInputs = registrationData.missingInputs;
const invalidInputs = registrationData.invalidInputs;

test.describe("Successful registration suite", () => {
  test("Verify successfull registration", async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const loginPage = new LoginPage(page);

    const validInput = { ...registrationData.validInputs[0] };
    validInput.username += Date.now();
    validInput.email = Date.now() + validInput.email;

    await loginPage.goToBasePage();
    await loginPage.click(loginPage.loginButtonLocator);
    await loginPage.click(loginPage.registerButtonLocator);

    await registrationPage.fillRegistrationForm(validInput);
    await registrationPage.submitRegistrationForm();

    await expect(
      registrationPage.successfullRegisterMessageLocator
    ).toBeVisible();
  });
});

test.describe("Unsuccessful registration suite", () => {
  missingInputs.forEach((dataSet) => {
    test(`Verify sign in button inactivity in case of ${dataSet.case}`, async ({
      page,
    }) => {
      const registrationPage = new RegistrationPage(page);
      const loginPage = new LoginPage(page);
      await loginPage.goToBasePage();
      await loginPage.click(loginPage.loginButtonLocator);
      await loginPage.click(loginPage.registerButtonLocator);

      await registrationPage.fillRegistrationForm(dataSet);

      await expect(registrationPage.regSigninButtonLocator).toBeDisabled();
      //await expect(page.url()).toContain(registrationPage.url);
    });
  });

  invalidInputs.forEach((dataSet) => {
    test(`Verify sign in button inactivity in case of ${dataSet.case}`, async ({
      page,
    }) => {
      const registrationPage = new RegistrationPage(page);
      const loginPage = new LoginPage(page);
      await loginPage.goToBasePage();
      await loginPage.click(loginPage.loginButtonLocator);
      await loginPage.click(loginPage.registerButtonLocator);

      await registrationPage.fillRegistrationForm(dataSet);

      await expect(registrationPage.regSigninButtonLocator).toBeDisabled();
      //await expect(page.url()).toContain(registrationPage.url);
    });
  });
});
