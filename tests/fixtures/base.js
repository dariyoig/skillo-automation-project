// Base extended test with common fixtures
import { test as base, expect } from "@playwright/test";
import loginData from "../../test-data/loginData.json" assert { type: "json" };

import { LoginPage } from "../../pages/LoginPage";
import { RegistrationPage } from "../../pages/RegistrationPage";
import { NewPostPage } from "../../pages/NewPostPage";
import { ProfilePage } from "../../pages/ProfilePage";

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
  newPostPage: async ({ page }, use) => {
    await use(new NewPostPage(page));
  },
  profilePage: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },
  loggedInUser: async ({ loginPage }, use) => {
    await loginPage.page.goto(loginPage.url);
    await loginPage.login(loginData.validUser.username, loginData.validUser.password, true);
    await use();
  },
});

export { test, expect };
