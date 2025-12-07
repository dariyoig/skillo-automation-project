// Playwright configuration file for test infrastructure (ES module format)
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: "http://training.skillo-bg.com:4300",
    headless: false,
    screenshot: "on",
    video: "retain-on-failure",
    trace: "on",
  },
  reporter: [["html", { open: "never" }]],
  projects: [
    { name: "Chromium", use: { browserName: "chromium" } },
    { name: "Firefox", use: { browserName: "firefox" } },
    { name: "WebKit", use: { browserName: "webkit" } },
  ],
  workers: 2,
});
