// // New post tests specification file
// Test 1 - Verify successfull post upload with valid data
// Test 2 - Verify error message upon upload of invalid File
// Test 3 - Verify error message when missing caption

import { test, expect } from "@playwright/test";
import { NewPostPage } from "../pages/NewPostPage";
import { LoginPage } from "../pages/LoginPage";
import loginData from "../test-data/loginData.json" assert { type: "json" };
import path from "node:path";

const imagePath = path.resolve("test-data/image-file.png");
const invalidImagePath = path.resolve("test-data/csv-file.csv");

test.describe("Successful post creation suite", () => {
  test("Verify successfull post upload with valid data", async ({ page }) => {
    const newPostPage = new NewPostPage(page);
    const loginPage = new LoginPage(page);

    const caption = `Post-${Date.now()}`;

    await loginPage.goToBasePage();
    await loginPage.click(loginPage.loginButtonLocator);

    await loginPage.usernameFieldLocator.fill(loginData.validUser.username);
    await loginPage.passwordFieldLocator.fill(loginData.validUser.password);
    await loginPage.rememberMeCheckboxLocator.check();
    await loginPage.click(loginPage.signInButtonLocator);

    await newPostPage.click(newPostPage.newPostButtonLocator);

    await newPostPage.fileInputLocator.setInputFiles(imagePath);
    await newPostPage.postCaptionFieldLocator.fill(caption);
    await newPostPage.createPostButtonLocator.click();

    await expect(newPostPage.postCreatedMessageLocator).toBeVisible();
  });
});

test.describe("Unsuccessful post creation suite", () => {
  test("Verify error message upon upload of invalid File", async ({ page }) => {
    const newPostPage = new NewPostPage(page);
    const loginPage = new LoginPage(page);

    const caption = `Post-${Date.now()}`;

    await loginPage.goToBasePage();
    await loginPage.click(loginPage.loginButtonLocator);

    await loginPage.usernameFieldLocator.fill(loginData.validUser.username);
    await loginPage.passwordFieldLocator.fill(loginData.validUser.password);
    await loginPage.rememberMeCheckboxLocator.check();
    await loginPage.click(loginPage.signInButtonLocator);

    await newPostPage.click(newPostPage.newPostButtonLocator);

    await newPostPage.fileInputLocator.setInputFiles(invalidImagePath);
    await page.screenshot();
    await expect(newPostPage.onlyImageAllowedMessageLocator).toBeVisible();
  });

  test("Verify error message when missing caption", async ({ page }) => {
    const newPostPage = new NewPostPage(page);
    const loginPage = new LoginPage(page);

    const caption = `Post-${Date.now()}`;

    await loginPage.goToBasePage();
    await loginPage.click(loginPage.loginButtonLocator);

    await loginPage.usernameFieldLocator.fill(loginData.validUser.username);
    await loginPage.passwordFieldLocator.fill(loginData.validUser.password);
    await loginPage.rememberMeCheckboxLocator.check();
    await loginPage.click(loginPage.signInButtonLocator);

    await newPostPage.click(newPostPage.newPostButtonLocator);

    await newPostPage.fileInputLocator.setInputFiles(imagePath);
    //await newPostPage.postCaptionFieldLocator.fill(caption);
    await newPostPage.createPostButtonLocator.click();

    await expect(newPostPage.enterCaptionMessageLocator).toBeVisible();
  });
});
