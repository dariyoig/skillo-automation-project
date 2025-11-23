// Page Object Model for the new post creation page
import { BasePage } from "./BasePage";

export class NewPostPage extends BasePage {
  constructor(page) {
    super(page);

    this.dropImageHereLocator = page.getByText("Drop an Image here");
    this.browseButtonLocator = page.locator("#choose-file");
    this.uploadPictureFieldLocator = page.getByRole("textbox", { name: "Upload Picture" });
    this.postCaptionFieldLocator = page.getByRole("textbox", { name: "Enter you post caption here" });
    this.privateToggleLocator = page.getByText("Public");
    this.createPostButtonLocator = page.locator("#create-post");
  }
}
