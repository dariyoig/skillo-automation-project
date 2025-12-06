// // Logout tests specification file
//Test 1 - Verify user is logged out when pressing exit button

import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import loginData from "../test-data/loginData.json" assert { type: "json" };
import { ProfilePage } from "../pages/ProfilePage";

test("Verify successfull post upload with valid data", async ({ page }) => {
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
  await page.waitForURL("**/login**");

  await expect(page.url()).toContain(loginPage.url);
});
