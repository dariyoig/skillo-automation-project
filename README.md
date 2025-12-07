# Skillo Social Media - Test Automation Suite

Test automation framework for the Skillo social media platform using Playwright and the Page Object Model pattern.

## 🎯 Project Overview

This project demonstrates test automation fundamentals, Playwright framework concepts, and software testing best practices. The focus is on showcasing clean code architecture, proper use of design patterns (POM), data-driven testing approaches, and structured thinking in test design—rather than exhaustive coverage.

The suite automates testing of core functionalities including user registration, authentication, logout workflows, and post creation with both positive and negative test scenarios.

**Application Under Test:** http://training.skillo-bg.com:4300/posts/all

## 🛠️ Technologies

- **Playwright** v1.57.0 - Modern end-to-end testing framework
- **Node.js** - JavaScript runtime
- **ESLint** - Code quality and style enforcement

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/dariyoig/skillo-automation-project.git
cd skillo-automation-project

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## ▶️ Running Tests

```bash
# Run all tests
npm test

# Run tests in headed mode (see browser)
npx playwright test --headed

# Run specific test file
npx playwright test tests/login.spec.js

# Run tests for specific browser
npx playwright test --project=chromium

# Run tests with UI mode
npx playwright test --ui

# View HTML report
npx playwright show-report
```

## 📁 Project Structure

```
├── pages/                      # Page Object Models
│   ├── BasePage.js            # Base class with common methods
│   ├── LoginPage.js           # Login page interactions
│   ├── RegistrationPage.js    # Registration page interactions
│   ├── NewPostPage.js         # Post creation interactions
│   └── ProfilePage.js         # Profile page interactions
├── tests/                      # Test specifications
│   ├── fixtures/              # Custom Playwright fixtures
│   │   └── base.js           # Extended test with page fixtures
│   ├── registration.spec.js   # Registration tests
│   ├── login.spec.js          # Login tests
│   ├── logout.spec.js         # Logout tests
│   └── newPost.spec.js        # Post creation tests
├── test-data/                  # Test data files
│   ├── loginData.json         # User credentials
│   ├── registrationData.json  # Registration test data
│   ├── image-file.png         # Valid image for posts
│   └── csv-file.csv           # Invalid file for negative tests
├── utils/                      # Utility functions
│   └── utils.js               # Helper functions
├── playwright.config.js        # Playwright configuration
└── package.json               # Project dependencies
```

## 🧪 Test Coverage

**Total Tests:** 16 unique test cases (48 total across 3 browsers)

### Registration Tests (6)

- ✅ Successful registration with standard inputs
- ✅ Successful registration with special characters in username
- ❌ Button validation - missing username
- ❌ Button validation - missing email
- ❌ Button validation - username too short
- ❌ Button validation - invalid email format

### Login Tests (5)

- ✅ Successful login with "Remember Me" checked
- ✅ Successful login without "Remember Me"
- ❌ Button validation - no username provided
- ❌ Button validation - no password provided
- ❌ Error message for invalid credentials

### Logout Tests (2)

- ✅ Logout after successful login
- ✅ Logout after successful registration

### Post Creation Tests (3)

- ✅ Successful post creation with valid image and caption
- ❌ Error message for non-image file upload
- ❌ Error message for missing caption

## 🏗️ Architecture

### Page Object Model (POM)

All page interactions are encapsulated in dedicated Page Object classes that extend `BasePage`, promoting code reusability and maintainability.

### Custom Fixtures

Playwright's `test.extend()` provides page object instances automatically to each test, reducing boilerplate code.

### Data-Driven Testing

Parameterized tests iterate over JSON data arrays to validate multiple scenarios efficiently.

## ⚙️ Configuration Highlights

- **Base URL:** Configured for relative navigation
- **Screenshots:** Captured on failure
- **Videos:** Recorded on failure for debugging
- **Traces:** Enabled for deep test analysis
- **Retries:** 1 automatic retry on failure
- **Reporters:** HTML report generation
- **Cross-Browser:** Chromium, Firefox, WebKit
- **Parallel Execution:** Configurable workers (set to 1 for local testing)

## 👤 Author

**Dariy Ivanov**  
GitHub: [@dariyoig](https://github.com/dariyoig)

## 📄 License

This project is for educational purposes as part of the Skillo QA Automation course.
