// // New post tests specification file
// Test 1 - Verify successfull post upload with valid data
// Test 2 - Verify error message upon upload of invalid File
// Test 3 - Verify error message when missing caption

import { test, expect } from "./fixtures/base";
import loginData from "../test-data/loginData.json" assert { type: "json" };
import path from "node:path";

const imagePath = path.resolve("test-data/image-file.png");
const invalidImagePath = path.resolve("test-data/csv-file.csv");

test.describe("Successful post creation suite", () => {
  test("Verify successfull post upload with valid data", async ({ loginPage, newPostPage, loggedInUser }) => {
    const caption = `Post-${Date.now()}`;

    await newPostPage.click(newPostPage.newPostButtonLocator);

    await newPostPage.fileInputLocator.setInputFiles(imagePath);
    await newPostPage.postCaptionFieldLocator.fill(caption);
    await newPostPage.createPostButtonLocator.click();

    await expect(newPostPage.postCreatedMessageLocator).toBeVisible();
  });
});

test.describe("Unsuccessful post creation suite", () => {
  test("Verify error message upon upload of invalid File", async ({ loginPage, newPostPage, loggedInUser }) => {
    await newPostPage.click(newPostPage.newPostButtonLocator);

    await newPostPage.fileInputLocator.setInputFiles(invalidImagePath);
    await expect(newPostPage.onlyImageAllowedMessageLocator).toBeVisible();
  });

  test("Verify error message when missing caption", async ({ loginPage, newPostPage, loggedInUser }) => {
    await newPostPage.click(newPostPage.newPostButtonLocator);

    await newPostPage.fileInputLocator.setInputFiles(imagePath);
    await newPostPage.createPostButtonLocator.click();

    await expect(newPostPage.enterCaptionMessageLocator).toBeVisible();
  });
});
