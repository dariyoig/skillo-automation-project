// Page Object Model for the registration page
import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {
  constructor(page) {
    super(page);

    this.url = "/users/register";

    this.regUsernameLocator = page.getByRole("textbox", { name: "Username" });
    this.regEmailLocator = page.getByRole("textbox", { name: "email" });
    this.regBirthdateLocator = page.getByPlaceholder("Birth date");
    this.regPasswordLocator = page.locator("#defaultRegisterFormPassword");
    this.regConfirmPasswordLocator = page.locator(
      "#defaultRegisterPhonePassword"
    );
    this.regPublicInfoLocator = page.getByRole("textbox", {
      name: "Public info",
    });
    this.regSigninButtonLocator = page.locator("#sign-in-button");
    this.successfullRegisterMessageLocator = page.getByRole("alertdialog", {
      name: "Successful register!",
    });
  }

  async fillRegistrationForm(data) {
    data.username += Date.now();
    data.email = Date.now() + data.email;
    await this.regUsernameLocator.fill(data.username);
    await this.regEmailLocator.fill(data.email);
    await this.regBirthdateLocator.fill(data.birthDay);
    await this.regPasswordLocator.fill(data.password);
    await this.regConfirmPasswordLocator.fill(data.confirmPassword);
    await this.regPublicInfoLocator.fill(data.publicInfo);
  }
  async submitRegistrationForm() {
    await this.regSigninButtonLocator.click();
  }
}
