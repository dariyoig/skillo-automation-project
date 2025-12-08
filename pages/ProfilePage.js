// This POM is still under development and is not yet in use

import { BasePage } from "./BasePage";

export class ProfilePage extends BasePage {
  constructor(page) {
    super(page);

    this.url = "/users/";

    this.allPostsFilterLocator = page.getByText("All");
  }
  getUsernameHeadingLocator(username) {
    return this.page.getByRole("heading", { name: username });
  }
  getPrivacyFilterLocator(privacy) {
    return this.page.getByText(`${privacy}`);
  }
}
