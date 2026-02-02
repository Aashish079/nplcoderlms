# NPL Coder LMS - Gherkin Feature Files

This directory contains all Gherkin feature files for NPL Coder LMS, following BDD (Behavior-Driven Development) practices.

## Directory Structure

```
features/
├── authentication/
│   ├── login.feature
│   └── signup.feature
├── account/
│   ├── view-account.feature
│   └── manage-account.feature
├── step-definitions/
│   └── (Step definition files will go here)
└── support/
    └── (Support files and hooks will go here)
```

## Feature Files Overview

### Authentication Features

#### `login.feature`
Covers all login-related scenarios including:
- ✅ Successful login with valid credentials
- ❌ Failed login attempts (invalid email, wrong password, unregistered user)
- 🔐 OAuth login (Google, GitHub)
- 🔑 Password reset flow
- 📱 Responsive design and UI testing
- ♿ Accessibility testing

**Tags:** `@authentication`, `@happy-path`, `@validation`, `@social`, `@security`, `@ui`, `@accessibility`

#### `signup.feature`
Covers all registration scenarios including:
- ✅ Successful signup and email verification
- ❌ Validation errors (invalid email, weak password, mismatched passwords)
- 🔐 OAuth signup (Google, GitHub)
- 📝 Password complexity requirements
- 📱 Responsive design
- 🔒 Privacy and terms acceptance

**Tags:** `@registration`, `@happy-path`, `@validation`, `@social`, `@security`, `@privacy`

### Account Management Features

#### `view-account.feature`
Covers viewing account information including:
- 👤 Profile information display
- ⚙️ Preferences section
- 🎨 Theme support (light/dark mode)
- 📱 Responsive design
- 🔒 Security and authorization
- ♿ Accessibility

**Tags:** `@profile`, `@display`, `@preferences`, `@theme`, `@security`, `@accessibility`

#### `manage-account.feature`
Covers account management scenarios including:
- ✏️ Update profile information (name, email)
- 🔑 Change password
- 🎨 Theme preferences
- 🔔 Notification preferences
- 🔐 Two-factor authentication
- 🌐 Language settings
- 🗑️ Account deletion
- 📦 Data export

**Tags:** `@profile-update`, `@email-update`, `@password`, `@security`, `@preferences`, `@privacy`

## Tag Reference

### Functional Tags
- `@authentication` - User login and session management
- `@registration` - User signup and account creation
- `@profile` - User profile related scenarios
- `@account` - Account management scenarios

### Type Tags
- `@happy-path` - Successful flows that should work as expected
- `@validation` - Input validation and error handling
- `@security` - Security-related scenarios
- `@ui` - User interface and design scenarios
- `@accessibility` - Accessibility compliance testing
- `@performance` - Performance-related scenarios

### Feature-Specific Tags
- `@social` - OAuth/Social login scenarios
- `@theme` - Theme switching scenarios
- `@notifications` - Notification preference scenarios
- `@two-factor` - Two-factor authentication scenarios
- `@password` - Password-related scenarios
- `@privacy` - Privacy settings scenarios

## Running Tests

### Run All Features
```bash
npm run test:features
```

### Run Specific Feature
```bash
npm run test:features -- features/authentication/login.feature
```

### Run by Tag
```bash
# Run only happy path scenarios
npm run test:features -- --tags "@happy-path"

# Run only authentication scenarios
npm run test:features -- --tags "@authentication"

# Run multiple tags (AND logic)
npm run test:features -- --tags "@authentication and @happy-path"

# Run multiple tags (OR logic)
npm run test:features -- --tags "@authentication or @registration"

# Exclude specific tags
npm run test:features -- --tags "not @wip"
```

### Run with Pretty Formatter
```bash
npm run test:features -- --format @cucumber/pretty-formatter
```

## Writing Step Definitions

Step definitions should be organized by domain:

```typescript
// features/step-definitions/authentication.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';

Given('I am on the login page at {string}', async function(url: string) {
  await this.page.goto(url);
});

When('I enter my email {string}', async function(email: string) {
  await this.page.fill('[name="email"]', email);
});

Then('I should be redirected to the dashboard at {string}', async function(url: string) {
  expect(this.page.url()).toContain(url);
});
```

## Best Practices

1. **Use Background** - Put common setup steps in the Background section
2. **Keep Scenarios Focused** - Each scenario should test one specific behavior
3. **Use Descriptive Names** - Scenario names should clearly describe what is being tested
4. **Tag Appropriately** - Use tags to organize and filter tests
5. **Use Scenario Outlines** - For testing multiple similar cases with different data
6. **Write Declaratively** - Focus on WHAT, not HOW (avoid UI implementation details)
7. **Maintain Independence** - Each scenario should be able to run independently

## Contributing

When adding new features:
1. Create a new `.feature` file in the appropriate directory
2. Write scenarios in plain English following Given-When-Then format
3. Add appropriate tags for filtering
4. Update this README with the new feature documentation
5. Create corresponding step definitions
6. Ensure all scenarios are testable and have clear acceptance criteria

## Resources

- [Cucumber Documentation](https://cucumber.io/docs/cucumber/)
- [Gherkin Reference](https://cucumber.io/docs/gherkin/reference/)
- [BDD Best Practices](https://cucumber.io/docs/bdd/)
- [Testing Library React](https://testing-library.com/docs/react-testing-library/intro/)

## Next Steps

1. ✅ Gherkin feature files created
2. ⏳ Create step definitions for authentication features
3. ⏳ Create step definitions for account management features
4. ⏳ Set up test environment and hooks
5. ⏳ Create course management feature files
6. ⏳ Create enrollment feature files
7. ⏳ Add CI/CD integration for automated testing
