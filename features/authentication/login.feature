Feature: User Login
  As a user of NPL Coder LMS
  I want to log in to my account
  So that I can access my courses and learning materials

  Background:
    Given the LMS application is running
    And I am on the login page at "/sign-in"

  @happy-path @authentication
  Scenario: Successful login with valid credentials
    Given I am a registered user with email "student@nplcoder.com"
    When I enter my email "student@nplcoder.com"
    And I enter my password "SecurePassword123!"
    And I click the "Sign in" button
    Then I should be redirected to the dashboard at "/dashboard"
    And I should see a welcome message
    And I should see my user profile information

  @validation @authentication
  Scenario: Login fails with invalid email format
    When I enter an invalid email "notanemail"
    And I enter my password "SecurePassword123!"
    And I click the "Sign in" button
    Then I should see an error message "Please enter a valid email address"
    And I should remain on the login page

  @validation @authentication
  Scenario: Login fails with incorrect password
    Given I am a registered user with email "student@nplcoder.com"
    When I enter my email "student@nplcoder.com"
    And I enter an incorrect password "WrongPassword123"
    And I click the "Sign in" button
    Then I should see an error message "Incorrect password"
    And I should remain on the login page
    And the password field should be cleared

  @validation @authentication
  Scenario: Login fails with unregistered email
    When I enter an unregistered email "unknown@example.com"
    And I enter my password "SecurePassword123!"
    And I click the "Sign in" button
    Then I should see an error message "Account not found"
    And I should remain on the login page

  @validation @authentication
  Scenario: Login fails with empty credentials
    When I leave the email field empty
    And I leave the password field empty
    And I click the "Sign in" button
    Then I should see an error message "Email is required"
    And I should see an error message "Password is required"
    And I should remain on the login page

  @authentication @social
  Scenario: Successful login with Google OAuth
    When I click the "Continue with Google" button
    And I authenticate with my Google account
    Then I should be redirected to the dashboard at "/dashboard"
    And I should see my user profile information

  @authentication @social
  Scenario: Successful login with GitHub OAuth
    When I click the "Continue with GitHub" button
    And I authenticate with my GitHub account
    Then I should be redirected to the dashboard at "/dashboard"
    And I should see my user profile information

  @authentication @forgot-password
  Scenario: Request password reset from login page
    When I click the "Forgot password?" link
    Then I should be redirected to the password reset page
    When I enter my email "student@nplcoder.com"
    And I click the "Send reset link" button
    Then I should see a success message "Password reset link sent to your email"

  @ui @authentication
  Scenario: Login page displays code block on large screens
    Given I am viewing the page on a large screen
    Then I should see the sign-in form on the left side
    And I should see a code block component on the right side
    And the code block should have a backdrop blur effect

  @ui @authentication
  Scenario: Login page is responsive on mobile devices
    Given I am viewing the page on a mobile device
    Then I should see only the sign-in form
    And the code block component should be hidden

  @security @authentication
  Scenario: Password field masks input
    When I start typing in the password field
    Then the password should be masked as dots or asterisks
    And the password should not be visible in plain text

  @navigation @authentication
  Scenario: Navigate to signup page from login
    When I click the "Don't have an account? Sign up" link
    Then I should be redirected to the signup page at "/sign-up"

  @session @authentication
  Scenario: Redirect authenticated user from login page
    Given I am already logged in
    When I try to access the login page at "/sign-in"
    Then I should be automatically redirected to the dashboard at "/dashboard"

  @accessibility @authentication
  Scenario: Login form is accessible with keyboard navigation
    When I navigate through the form using the Tab key
    Then I should be able to focus on the email field
    And I should be able to focus on the password field
    And I should be able to focus on the "Sign in" button
    And I should be able to submit the form using the Enter key
