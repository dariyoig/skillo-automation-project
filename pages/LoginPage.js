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
    this.successfulLoginMessageLocator = page.getByRole("alertdialog", { name: "Successful login!" });
    this.wrongUsernameOrPasswordMessageLocator = page.getByRole("alertdialog", { name: "Wrong username or password!" });
  }

  async navigateToLoginPage() {
    await this.goToBasePage();
    await this.click(this.loginButtonLocator);
  }

  async navigateToRegistrationPage() {
    await this.navigateToLoginPage();
    await this.click(this.registerButtonLocator);
  }
  async login(username, password, remember) {
    await this.fillLoginForm(username, password, remember);
    await this.submitLoginForm();
  }
  async fillLoginForm(username, password, remember) {
    await this.fillLoginUsername(username);
    await this.fillLoginPassword(password);
    await this.checkLoginRememberMe(remember);
  }
  async fillLoginUsername(username) {
    await this.usernameFieldLocator.fill(username);
  }
  async fillLoginPassword(password) {
    await this.passwordFieldLocator.fill(password);
  }
  // Handles "Remember Me" checkbox state based on test requirements
  async checkLoginRememberMe(shouldRemember) {
    if (shouldRemember) await this.rememberMeCheckboxLocator.check();
    else await this.rememberMeCheckboxLocator.uncheck();
  }
  async submitLoginForm() {
    await this.click(this.signInButtonLocator);
  }
  async signOut() {
    await this.click(this.signOutButtonLocator);
  }
}
