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
    this.successfullLoginMessageLocator = page.getByRole("alertdialog", { name: "Successful login!" });
    this.successfullLogoutMessageLocator = page.getByRole("alertdialog", { name: "Successful logout!" });
    this.wrongUsernameOrPasswordMessageLocator = page.getByRole("alertdialog", { name: "Wrong username or password!" });
  }

  async login(name, pass, remember) {
    await this.fillLoginForm(name, pass, remember);
    await this.submitLoginForm();
  }
  async fillLoginForm(name, pass, remember) {
    await this.fillLoginUsername(name);
    await this.fillLoginPassword(pass);
    await this.checkLoginRememberMe(remember);
  }
  async fillLoginUsername(name) {
    await this.usernameFieldLocator.fill(name);
  }
  async fillLoginPassword(pass) {
    await this.passwordFieldLocator.fill(pass);
  }
  async checkLoginRememberMe(boolean) {
    if (boolean) await this.rememberMeCheckboxLocator.check();
    else await this.rememberMeCheckboxLocator.uncheck();
  }
  async submitLoginForm() {
    await this.signInButtonLocator.click();
  }
}
