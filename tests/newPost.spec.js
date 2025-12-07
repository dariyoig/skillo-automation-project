// // New post tests specification file
// Test 1 - Verify successfull post upload with valid data
// Test 2 - Verify error message upon upload of invalid File
// Test 3 - Verify error message when missing caption

import { test, expect } from "./fixtures/base";
import { appendTimestampBack } from "../utils/utils.js";
import path from "node:path";

const imagePath = path.resolve("test-data/image-file.png");
const invalidImagePath = path.resolve("test-data/csv-file.csv");

test.beforeEach(async ({ newPostPage, loggedInUser }) => {
  await newPostPage.navigateToNewPostPage();
});

test.describe("Successful post creation suite", () => {
  test("Verify successfull post upload with valid data", async ({ newPostPage }) => {
    const caption = appendTimestampBack("POST");

    await newPostPage.createPost(imagePath, caption);

    await expect(newPostPage.postCreatedMessageLocator).toBeVisible();
  });
});

test.describe("Unsuccessful post creation suite", () => {
  test("Verify error message upon upload of invalid File", async ({ newPostPage }) => {
    await newPostPage.uploadPicture(invalidImagePath);

    await expect(newPostPage.onlyImageAllowedMessageLocator).toBeVisible();
  });

  test("Verify error message when missing caption", async ({ newPostPage }) => {
    await newPostPage.createPost(imagePath, "");

    await expect(newPostPage.enterCaptionMessageLocator).toBeVisible();
  });
});
