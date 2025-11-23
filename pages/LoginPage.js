// Page Object Model for the login page
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.signInTextLocator = page.getByRole("paragraph").filter({ hasText: "Sign in" });
    this.usernameFieldLocator = page.locator("#defaultLoginFormUsername");
    this.passwordFieldLocator = page.locator("#defaultLoginFormPassword");
    this.rememberMeCheckboxLocator = page.getByRole("checkbox");
    this.signInButtonLocator = page.locator("#sign-in-button");
    this.registerButtonLocator = page.getByRole("link", { name: "Register" });
  }
}
