export class BasePage {
  constructor(page) {
    this.page = page;

    this.homeIconLocator = page.locator("#homeIcon");
    this.homeButtonLocator = page.locator("#nav-link-home");
    this.loginButtonLocator = page.locator("#nav-link-login");
    this.profileButtonLocator = page.locator("#nav-link-profile");
    this.newPostButtonLocator = page.locator("#nav-link-new-post");
    this.searchFieldLocator = page.locator("#search-bar");
    this.signOutButtonLocator = page.locator("a:has(i.fa-sign-out-alt)");
    this.successfulLogoutMessageLocator = page.getByRole("alertdialog", { name: "Successful logout!" });
  }

  async goToBasePage() {
    await this.page.goto("/");
  }

  async click(locator, description = "element") {
    try {
      await locator.click();
    } catch (error) {
      throw new Error(`Failed to click ${description}: ${error.message}`);
    }
  }

  async waitForUrl(urlPattern) {
    await this.page.waitForURL(urlPattern);
  }
}
