// Page Object Model for the new post creation page
import { BasePage } from "./BasePage";

export class NewPostPage extends BasePage {
  constructor(page) {
    super(page);

    this.url = "/posts/create";

    this.fileInputLocator = page.locator(
      'input[formcontrolname="coverUrl"][type="file"]:not([hidden])'
    );
    this.dropImageHereLocator = page.getByText("Drop an Image here");
    this.browseButtonLocator = page.locator("#choose-file");
    this.uploadPictureFieldLocator = page.getByRole("textbox", {
      name: "Upload Picture",
    });
    this.postCaptionFieldLocator = page.getByRole("textbox", {
      name: "Enter you post caption here",
    });
    this.privateToggleLocator = page.getByText("Public");
    this.createPostButtonLocator = page.locator("#create-post");
    this.postCreatedMessageLocator = page.getByRole("alertdialog", {
      name: "Post created!",
    });
    this.onlyImageAllowedMessageLocator = page.getByRole("alertdialog", {
      name: "Only files of type image allowed",
    });
    this.enterCaptionMessageLocator = page.getByRole("alertdialog", {
      name: "Please enter caption!",
    });
  }
}
