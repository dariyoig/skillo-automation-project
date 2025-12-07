// Base page with common methods for all page objects

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

  async click(locator) {
    await locator.click();
  }

  async waitForUrl(urlPattern) {
    await this.page.waitForURL(urlPattern);
  }
}
