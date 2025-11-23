// Page Object Model for the user profile page
import { BasePage } from "./BasePage";

export class ProfilePage extends BasePage {
  constructor(page) {
    super(page);

    this.allPostsFilterLocator = page.getByText("All");
  }
  getUsernameHeadingLocator(username) {
    return this.page.getByRole("heading", { name: username });
  }
  getPrivacyFilterLocator(privacy) {
    return this.page.getByText(`${privacy}`);
  }
}
