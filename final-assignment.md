# Final Project Assignment: Automated Testing with Playwright

## 📋 Project Overview

**Project Name:** Skillo Social Media Platform - Test Automation Suite

**Application Under Test:** http://training.skillo-bg.com:4300/posts/all

**Duration:** 2 weeks

**Project Type:** Individual Assignment

Congratulations on reaching the final project of your JavaScript Playwright course! In this comprehensive assignment, you will apply everything you've learned to create a professional test automation suite for a real social media application. You'll build automated tests for core functionalities including user registration, login, logout, and post creation, implementing both positive and negative test scenarios using the Page Object Model design pattern.

---

## 🎯 Learning Objectives

By completing this project, you will demonstrate your ability to:

1. **Apply Page Object Model (POM)** to create maintainable and scalable test architecture
2. **Design comprehensive test scenarios** covering both positive and negative test cases
3. **Implement async/await patterns** for handling asynchronous operations in Playwright
4. **Use advanced selectors and locators** to interact with complex web elements
5. **Handle various UI interactions** including forms, navigation, and dynamic content
6. **Organize and structure** a professional test automation project
7. **Document your work** through clear README files and code comments
8. **Use version control (Git)** to manage and share your project

---

## 📝 Detailed Requirements and Specifications

### 1. Core Functionalities to Test

You must create automated tests for the following four main functionalities:

#### **A. Registration Functionality**

#### **B. Login Functionality**

#### **C. Logout Functionality**

#### **D. New Post Functionality**

### 2. Technical Requirements

#### **Must Have:**

- ✅ Minimum of **12 test cases total** (positive and negative combined)
- ✅ **Page Object Model (POM)** implementation for all pages
- ✅ Proper use of **async/await** for all Playwright operations
- ✅ **Playwright configuration file** with appropriate settings
- ✅ Use of **hooks** (beforeEach, afterEach, etc.) for test setup and cleanup
- ✅ Use of **fixtures** (built-in or custom via `test.extend`/`test.use`) for common setup
- ✅ **Data-driven tests** (parameterized scenarios iterating over arrays/JSON data) applied to at least one functionality; externalize test inputs (e.g., in `test-data/*.json`)
- ✅ Proper **error handling** where appropriate
- ✅ **Clear and descriptive test names** that explain what is being tested
- ✅ **Code comments** explaining complex logic
- ✅ All tests should be **independent** and able to run in any order

#### **Playwright Configuration Requirements**

The Playwright configuration must explicitly provide the following capabilities as part of the test automation infrastructure (no code examples required):

- ✅ baseURL configured for the application under test to enable relative navigation in tests
- ✅ Automatic screenshot capture policy defined to aid debugging
- ✅ Video recording policy defined for post‑mortem analysis
- ✅ Trace collection enabled to support deep debugging of flaky or failing tests
- ✅ Retry logic configured to improve resilience in unstable environments
- ✅ HTML report generation enabled for clear visibility of aggregated test results
- ✅ Cross‑browser execution set up (Chromium, Firefox, WebKit) to validate compatibility
- ✅ Parallel execution supported locally via workers to reduce total test suite runtime

#### **Project Structure:**

```
skillo-automation-project/
│
├── .vscode/                        # VS Code workspace settings
│   ├── extensions.json             # Recommended extensions
│   └── settings.json               # Workspace settings
│
├── pages/                          # Page Object Model classes
│   ├── BasePage.js                 # Base page with common methods
│   ├── RegistrationPage.js         # Registration page object
│   ├── LoginPage.js                # Login page object
│   ├── HomePage.js                 # Home/Posts page object
│   ├── NewPostPage.js              # New post creation page object
│   └── ProfilePage.js              # User profile page object
│
├── tests/                          # Test specifications & test-only code
│   ├── fixtures/                   # Custom Playwright fixtures (extended test)
│   │   ├── base.js                 # Base extended test with common fixtures
│   │   └── auth.js                 # Example auth/session fixture
│   ├── registration.spec.js        # Registration tests
│   ├── login.spec.js               # Login tests
│   ├── logout.spec.js              # Logout tests
│   └── newPost.spec.js             # New post tests
│
├── test-data/                      # Static test data (JSON, images, etc.)
│   ├── users.json                  # User test data (optional)
│   └── test-image.jpg              # Sample image for post creation
│
├── .gitignore                      # Git ignore file
├── eslint.config.mjs               # ESLint configuration
├── package.json                    # NPM dependencies
├── playwright.config.js            # Playwright configuration
└── README.md                       # Project documentation
```

---

## 🚀 Step-by-Step Implementation Guidance

### **Phase 1: Project Setup (Days 1)**

#### Step 1: Create Git Repository

#### Step 2: Initialize Node.js Project

#### Step 3: Create Project Structure

#### Step 4: Configure Playwright

**💡 Tip:** Start with `headless: false` and `workers: 1` to see tests running and debug easily.

#### Step 4b: Configure ESLint & VS Code

- Add `eslint.config.mjs` at the project root.
- Create `.vscode/extensions.json`
- Create `.vscode/settings.json`

Note: Use the configurations from the course materials.

---

### **Phase 2: Explore the Application (Days 2)**

Before writing any code, manually explore the application:

#### Step 5: Manual Testing & Documentation

1. **Open the application** in your browser
2. **Manually test each functionality:**
   - Try to register a new user
   - Login with the created user
   - Create a new post
   - Logout
3. **Document your findings:**
   - What are the required fields?
   - What validation messages appear?
   - What happens on success/failure?
   - What are the element selectors? (Use DevTools to inspect)

#### Step 6: Use Playwright Codegen (Optional Helper)

```bash
npx playwright codegen http://training.skillo-bg.com:4300
```

- This tool helps you identify selectors
- Don't copy the generated code directly; use it as a reference
- Focus on learning how to find reliable selectors

**💡 Tip:** Create a document or spreadsheet listing all the selectors you'll need for each page.

---

### **Phase 3: Create Page Objects (Days 3)**

### **Phase 4: Write Test Cases (Days 3)**

#### Step 10: Create Your First Test File

#### Step 11: Follow the AAA Pattern

For each test, use the **Arrange-Act-Assert** pattern:

- **Arrange:** Set up test data and preconditions
- **Act:** Perform the action being tested
- **Assert:** Verify the expected outcome

#### Step 12: Create Test Files for Each Functionality

**💡 Tips for Writing Tests:**

- Use descriptive test names: `test('Negative: Should show error when username field is empty')`
- Keep tests independent - each test should work on its own
- Clean up test data if needed (delete created posts, etc.)

#### Step 13: Handle Test Data

For registration tests, you'll need unique usernames. Consider these approaches:

**Option 1: Generate Random Data**

**Option 2: Use Test Data File**
Create `test-data/users.json`:

```json
{
  "validUser": {
    "username": "existinguser123",
    "password": "Password123!"
  },
  "newUser": {
    "username": "newuser",
    "email": "newuser@test.com",
    "password": "Password123!"
  }
}
```

Then import in your tests:

```javascript
import testData from "../test-data/users.json";
```

#### Step 14: Add Test Image for Post Creation

1. Find a small test image (JPEG or PNG)
2. Save it in `test-data/test-image.jpg`
3. Use it in your new post tests:

```javascript
import path from "node:path";
const imagePath = path.resolve("test-data/test-image.jpg");
```

---

### **Phase 5: Testing & Refinement**

#### Step 15: Run Your Tests

#### Step 16: Debug Failing Tests

#### Step 17: Add Waits and Stability

If tests are flaky (sometimes pass, sometimes fail):

```javascript
// Wait for element to be visible
await page.waitForSelector(".element", { state: "visible" });

// Wait for navigation
await page.waitForURL("**/posts/all");

// Wait for network to be idle
await page.waitForLoadState("networkidle");
```

---

### **Phase 6: Documentation**

#### Step 18: Write a Comprehensive README

Your `README.md` should include:

````markdown
# Skillo Social Media - Test Automation Suite

## 📖 Project Overview

Brief description of the project, the application being tested, and the purpose.

## 🎯 Project Purpose

Explain why this automation suite was created and what problems it solves.

## 🛠️ Technologies Used

## 📋 Prerequisites

## 🚀 Installation & Setup

## ▶️ Running Tests

## 📁 Project Structure

Explain your folder structure and what each folder contains.

## 🧪 Test Scenarios

### Registration Tests

### Login Tests

### Logout Tests

### New Post Tests

## 📊 Test Coverage

- Total test cases: X
- Positive tests: X
- Negative tests: X

## 🏗️ Architecture

Explain your use of Page Object Model and how the project is organized.

## 🐛 Known Issues

(Optional) List any known issues or limitations.

## 🔮 Future Improvements

(Optional) Ideas for expanding the test suite.

## 👤 Author

Your Name
[Your GitHub Profile]

## 📄 License

(Optional) MIT License or mention it's for educational purposes
````

#### Step 19: Add Code Comments

Go through your code and add comments explaining:

- Complex logic
- Why certain waits are needed
- What each method does (if not obvious)
- Any workarounds or special handling

Example:

```javascript
// Wait for the success toast to appear before proceeding
// The application shows this for 3 seconds after successful login
await page.waitForSelector(".toast-success", { timeout: 5000 });
```

---

### **Phase 7: Final Submission**

#### Step 20: Commit and Push Your Code

**💡 Tip:** Make multiple commits throughout your project, not just one at the end!

#### Step 21: Final Checklist

Before submitting, verify:

- [ ] All 12+ test cases are implemented
- [ ] All tests pass when run together
- [ ] Page Object Model is properly implemented
- [ ] Data-driven tests are implemented (parameterized from arrays/JSON)
- [ ] Fixtures are used for common setup (built-in or custom)
- [ ] README.md is complete and professional
- [ ] ESLint configuration (`eslint.config.mjs`) exists and code lints cleanly
- [ ] Code has meaningful comments
- [ ] `.gitignore` prevents unnecessary files from being committed
- [ ] `.vscode` recommendations (`extensions.json`, `settings.json`) are committed
- [ ] Repository is public and accessible
- [ ] Project structure follows recommended organization
- [ ] Test names are clear and descriptive
- [ ] Playwright config includes baseURL, screenshots, video, trace, retries, HTML report, cross-browser projects, and parallel workers

#### Step 22: Test Your Repository

1. Clone your repository to a different folder (simulate someone else downloading it)
2. Follow your own README instructions
3. Verify everything works as expected
4. Fix any issues you discover

---

## 📤 Submission Guidelines

### What to Submit:

1. **GitHub Repository URL** - Your public repository link
2. **README.md** - Must be visible on your repository homepage
3. **Submission Form** (if provided by instructor) with:
   - Your name
   - Repository URL
   - Brief project summary (2-3 sentences)
   - Any special notes or considerations

### Submission Format:

Send an email to [ dimitar.tarkalanov@gmail.com and polina.ivanova@skillo.bg ] with:

- **Subject:** Skillo Automation Final Project
- **Body:**

  ```
  Name: [Your Full Name]
  Repository URL: [Your GitHub Repository URL]

  Special Notes:
  [Any additional information the instructor should know]
  ```

### Deadline:

**[2 weeks]**

Late submissions will be subject to [instructor's late policy].

---

## 💡 Additional Tips and Best Practices

### General Tips:

1. **Start Early:** Don't wait until the last few days
2. **Commit Often:** Make small, incremental commits
3. **Test Frequently:** Run your tests after each change
4. **Ask for Help:** Reach out to your automation trainer
5. **Keep It Simple:** Start with basic tests and improve them gradually
6. **Review Course Materials:** Refer back to lectures when stuck

### Common Pitfalls to Avoid:

❌ **Don't:**

- Copy-paste code without understanding it
- Hardcode waits with `setTimeout()`
- Use the same test data for every test (can cause conflicts)
- Ignore failing tests and move on
- Commit node_modules folder
- Share sensitive credentials in your repository
- Wait until the last day to start

✅ **Do:**

- Understand every line of code you write
- Use Playwright's built-in waiting mechanisms
- Generate unique test data for each test run
- Debug and fix issues immediately
- Use `.gitignore` properly
- Use dummy/test credentials
- Give yourself plenty of time

### Debugging Strategies:

1. **Use `page.pause()`** to stop execution and inspect manually
2. **Run in headed mode** to see what's happening
3. **Check the screenshots** in test-results folder
4. **Use console.log** to debug variable values
5. **Run one test at a time** using `test.only()`
6. **Check the Playwright documentation** - it's excellent!

### Selector Tips:

```javascript
// Prefer these (more stable):
page.locator("#login-button");
page.locator('role=button[name="Submit"]');
page.locator('[data-testid="username-input"]');

// Avoid these (more fragile):
page.locator(".css-class-12345");
page.locator("div > div > div > input");
```

### When Tests Are Flaky:

If your tests sometimes pass and sometimes fail:

1. Add appropriate waits
2. Ensure elements are visible before interacting
3. Wait for network requests to complete
4. Check if there are animations or transitions
5. Increase timeout if needed (but find the root cause)

---

## 📚 Additional Resources

### Documentation:

- [Playwright Official Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Page Object Model Best Practices](https://playwright.dev/docs/pom)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### Helpful Tools:

- **Playwright Inspector:** `npx playwright test --debug`
- **Playwright Codegen:** `npx playwright codegen [url]`
- **Playwright Trace Viewer:** `npx playwright show-trace trace.zip`

### Writing Better Tests:

- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Writing Reliable Selectors](https://playwright.dev/docs/selectors)
- [Test Fixtures Guide](https://playwright.dev/docs/test-fixtures)

### Markdown Guide (for README):

- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/)

---

## ❓ Frequently Asked Questions

**Q: Can I use TypeScript instead of JavaScript?**
A: This course focused on JavaScript, so please use JavaScript for consistency and to demonstrate what you've learned.

**Q: How do I handle unique usernames for registration tests?**
A: Use timestamps or random numbers to generate unique usernames each time:

```javascript
const username = `testuser_${Date.now()}`;
```

**Q: Can I work with a partner?**
A: This is an individual project. You may discuss approaches with classmates, but all code must be your own.

**Q: What if the test application is down or unavailable?**
A: Contact your instructor immediately. Do not wait until the deadline.

**Q: How many negative tests should I create for each functionality?**
A: Aim for at least 2 negative tests per functionality, but more is better. Think about different ways something can fail.

**Q: Should I delete test data (posts, users) after tests?**
A: For registration, each test should use a unique username. For posts, you can delete them in `afterEach` hook if you want, but it's not required.

**Q: Can I add extra features beyond the requirements?**
A: Only if they are related to the assignment's functionalities and enhance the test coverage.

**Q: My tests pass when running individually but fail when running together. Why?**
A: This usually means tests are not independent. Check for shared test data, proper cleanup in hooks, or race conditions.

**Q: How detailed should my code comments be?**
A: Comment non-obvious logic, complex selectors, workarounds, and any "why" decisions. Don't comment obvious code.

---

## 🎓 Final Words

This project is your opportunity to showcase everything you've learned in this course. Take pride in your work, pay attention to details, and create something you'd be proud to show in a job interview. Remember:

- **Quality over quantity** - 12 well-written tests are better than 20 mediocre ones
- **Documentation matters** - A great README shows professionalism
- **Clean code matters** - Write code you'd want to maintain
- **Testing is a skill** - You're building a valuable professional skill

You've learned a tremendous amount throughout this course. Trust in your abilities, refer back to course materials when needed, and take your time to do this right.

**Good luck, and happy testing! 🚀**
