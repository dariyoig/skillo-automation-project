// Base extended test with common fixtures
import { test as base, expect } from "@playwright/test";

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
});

export { test, expect };
