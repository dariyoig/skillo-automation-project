// Page Object Model for the registration page
import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {
  constructor(page) {
    super(page);

    this.regUsernameLocator = page.getByRole("textbox", { name: "Username" });
    this.regEmailLocator = page.getByRole("textbox", { name: "email" });
    this.regBirthdateLocator = page.getByPlaceholder("Birth date");
    this.regPasswordLocator = page.locator("#defaultRegisterFormPassword");
    this.regConfirmPasswordLocator = page.locator("#defaultRegisterPhonePassword");
    this.regPublicInfoLocator = page.getByRole("textbox", { name: "Public info" });
    this.regSigninButtonLocator = page.locator("#sign-in-button");
  }
}
