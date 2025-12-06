// Page Object Model for the login page
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.url = "/users/login";

    this.usernameFieldLocator = page.locator("#defaultLoginFormUsername");
    this.passwordFieldLocator = page.locator("#defaultLoginFormPassword");
    this.rememberMeCheckboxLocator = page.getByRole("checkbox");
    this.signInButtonLocator = page.locator("#sign-in-button");
    this.registerButtonLocator = page.getByRole("link", { name: "Register" });
    this.successfullLoginMessageLocator = page.getByRole("alertdialog", {
      name: "Successful login!",
    });
    this.successfullLogoutMessageLocator = page.getByRole("alertdialog", {
      name: "Successful logout!",
    });
    this.wrongUsernameOrPasswordMessageLocator = page.getByRole("alertdialog", {
      name: "Wrong username or password!",
    });
  }
}
