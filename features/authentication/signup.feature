Feature: User Signup
  As a new user of NPL Coder LMS
  I want to create an account
  So that I can access courses and start learning

  Background:
    Given the LMS application is running
    And I am on the signup page at "/sign-up"

  @happy-path @registration
  Scenario: Successful signup with valid information
    When I enter my full name "John Doe"
    And I enter my email "john.doe@nplcoder.com"
    And I enter a valid password "SecurePassword123!"
    And I confirm my password "SecurePassword123!"
    And I click the "Sign up" button
    Then I should receive a verification email at "john.doe@nplcoder.com"
    And I should see a message "Please verify your email to continue"
    And my account should be created in the system

  @happy-path @registration @verification
  Scenario: Complete signup with email verification
    Given I have submitted the signup form with email "john.doe@nplcoder.com"
    When I open the verification email
    And I click the verification link
    Then I should be redirected to the dashboard at "/dashboard"
    And I should see a welcome message "Welcome to NPL Coder LMS!"
    And my email should be marked as verified
    And I should have access to available courses

  @validation @registration
  Scenario: Signup fails with invalid email format
    When I enter my full name "John Doe"
    And I enter an invalid email "notanemail"
    And I enter a valid password "SecurePassword123!"
    And I confirm my password "SecurePassword123!"
    And I click the "Sign up" button
    Then I should see an error message "Please enter a valid email address"
    And my account should not be created

  @validation @registration
  Scenario: Signup fails with already registered email
    Given a user already exists with email "existing@nplcoder.com"
    When I enter my full name "John Doe"
    And I enter my email "existing@nplcoder.com"
    And I enter a valid password "SecurePassword123!"
    And I confirm my password "SecurePassword123!"
    And I click the "Sign up" button
    Then I should see an error message "This email is already registered"
    And I should see a link to the login page

  @validation @registration
  Scenario: Signup fails with weak password
    When I enter my full name "John Doe"
    And I enter my email "john.doe@nplcoder.com"
    And I enter a weak password "123"
    And I click the "Sign up" button
    Then I should see an error message "Password must be at least 8 characters"
    And I should see password strength requirements

  @validation @registration
  Scenario Outline: Password must meet complexity requirements
    When I enter my full name "John Doe"
    And I enter my email "john.doe@nplcoder.com"
    And I enter password "<password>"
    And I click the "Sign up" button
    Then I should see an error message "<error_message>"

    Examples:
      | password     | error_message                                    |
      | short        | Password must be at least 8 characters           |
      | alllowercase | Password must contain at least one uppercase letter |
      | ALLUPPERCASE | Password must contain at least one lowercase letter |
      | NoNumbers!   | Password must contain at least one number        |
      | NoSpecial123 | Password must contain at least one special character |

  @validation @registration
  Scenario: Signup fails with mismatched passwords
    When I enter my full name "John Doe"
    And I enter my email "john.doe@nplcoder.com"
    And I enter a valid password "SecurePassword123!"
    And I confirm my password "DifferentPassword123!"
    And I click the "Sign up" button
    Then I should see an error message "Passwords do not match"
    And my account should not be created

  @validation @registration
  Scenario: Signup fails with empty required fields
    When I leave the full name field empty
    And I leave the email field empty
    And I leave the password field empty
    And I click the "Sign up" button
    Then I should see an error message "Full name is required"
    And I should see an error message "Email is required"
    And I should see an error message "Password is required"

  @registration @social
  Scenario: Successful signup with Google OAuth
    When I click the "Continue with Google" button
    And I authenticate with my Google account
    And I authorize NPL Coder LMS to access my profile
    Then my account should be created automatically
    And I should be redirected to the dashboard at "/dashboard"
    And my email should be marked as verified

  @registration @social
  Scenario: Successful signup with GitHub OAuth
    When I click the "Continue with GitHub" button
    And I authenticate with my GitHub account
    And I authorize NPL Coder LMS to access my profile
    Then my account should be created automatically
    And I should be redirected to the dashboard at "/dashboard"
    And my email should be marked as verified

  @ui @registration
  Scenario: Signup page displays code block on large screens
    Given I am viewing the page on a large screen
    Then I should see the sign-up form on the left side
    And I should see a code block component on the right side
    And the code block should have a backdrop blur effect

  @ui @registration
  Scenario: Signup page is responsive on mobile devices
    Given I am viewing the page on a mobile device
    Then I should see only the sign-up form
    And the code block component should be hidden

  @ui @registration
  Scenario: Password strength indicator displays during signup
    When I start typing in the password field
    Then I should see a password strength indicator
    And the indicator should update as I type
    And the indicator should show "Weak", "Medium", or "Strong"

  @security @registration
  Scenario: Password fields mask input
    When I type in the password field
    Then the password should be masked as dots or asterisks
    When I type in the confirm password field
    Then the confirm password should be masked as dots or asterisks

  @navigation @registration
  Scenario: Navigate to login page from signup
    When I click the "Already have an account? Sign in" link
    Then I should be redirected to the login page at "/sign-in"

  @session @registration
  Scenario: Redirect authenticated user from signup page
    Given I am already logged in
    When I try to access the signup page at "/sign-up"
    Then I should be automatically redirected to the dashboard at "/dashboard"

  @accessibility @registration
  Scenario: Signup form is accessible with keyboard navigation
    When I navigate through the form using the Tab key
    Then I should be able to focus on the full name field
    And I should be able to focus on the email field
    And I should be able to focus on the password field
    And I should be able to focus on the confirm password field
    And I should be able to focus on the "Sign up" button
    And I should be able to submit the form using the Enter key

  @privacy @registration
  Scenario: Terms and conditions must be accepted
    Given the signup form has a terms and conditions checkbox
    When I fill in all required fields correctly
    But I do not check the terms and conditions checkbox
    And I click the "Sign up" button
    Then I should see an error message "You must accept the terms and conditions"
    And my account should not be created
