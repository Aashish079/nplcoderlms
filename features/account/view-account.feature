Feature: View Account Information
  As a registered user of NPL Coder LMS
  I want to view my account information
  So that I can review my profile details and preferences

  Background:
    Given I am logged in as "Aashish.Karki@nplcoder.com"
    And I navigate to the settings page at "/workspace/settings"

  @happy-path @profile
  Scenario: View complete profile information
    Then I should see the page title "Settings"
    And I should see the subtitle "Manage your account and preferences"
    And I should see a "Profile Information" section
    And I should see my full name displayed
    And I should see my email address displayed
    And the profile fields should be read-only

  @profile @display
  Scenario: View user full name in profile
    Given my account full name is "Aashish Karki"
    When I view the profile information section
    Then I should see the label "Full Name"
    And I should see my name "Aashish Karki" in the full name field
    And the full name field should be read-only

  @profile @display
  Scenario: View user email in profile
    Given my account email is "Aashish.Karki@nplcoder.com"
    When I view the profile information section
    Then I should see the label "Email"
    And I should see my email "Aashish.Karki@nplcoder.com" in the email field
    And the email field should be read-only

  @profile @display
  Scenario: View profile with missing optional information
    Given I have not provided my full name
    When I view the profile information section
    Then the full name field should be empty
    But the email field should still display my email

  @preferences @display
  Scenario: View preferences section
    When I scroll down to the preferences section
    Then I should see a "Preferences" section
    And I should see theme options
    And I should see notification preferences
    And I should see language preferences

  @ui @profile
  Scenario: Profile sections have proper styling
    Then the profile information section should have a white background in light mode
    And the profile information section should have a dark background in dark mode
    And the section should have rounded corners
    And the section should have a shadow effect
    And input fields should have proper borders

  @ui @responsive
  Scenario: Settings page is responsive on mobile
    Given I am viewing the page on a mobile device
    Then the profile information section should stack vertically
    And all fields should be full width
    And the layout should be touch-friendly

  @ui @responsive
  Scenario: Settings page displays properly on tablet
    Given I am viewing the page on a tablet device
    Then the profile information section should display properly
    And the layout should adapt to the screen size

  @ui @responsive
  Scenario: Settings page displays properly on desktop
    Given I am viewing the page on a desktop screen
    Then the profile information section should have adequate spacing
    And the layout should utilize the available width

  @navigation @profile
  Scenario: Access settings from dashboard navigation
    Given I am on the dashboard at "/dashboard"
    When I click on the "Settings" link in the navigation
    Then I should be redirected to "/workspace/settings"
    And I should see my profile information

  @navigation @profile
  Scenario: Access settings from workspace layout
    Given I am in the workspace at "/workspace"
    When I click on the "Settings" menu item
    Then I should be redirected to "/workspace/settings"
    And I should see my profile information

  @security @profile
  Scenario: Unauthorized user cannot access settings page
    Given I am not logged in
    When I try to access "/workspace/settings"
    Then I should be redirected to the login page at "/sign-in"
    And I should see a message "Please sign in to continue"

  @theme @profile
  Scenario: View settings page in light mode
    Given the application theme is set to "light"
    When I view the settings page
    Then the background should be light colored
    And text should be dark colored
    And input fields should have light backgrounds

  @theme @profile
  Scenario: View settings page in dark mode
    Given the application theme is set to "dark"
    When I view the settings page
    Then the background should be dark colored
    And text should be light colored
    And input fields should have dark backgrounds

  @accessibility @profile
  Scenario: Settings page is accessible with screen readers
    When I use a screen reader on the settings page
    Then all form labels should be properly associated with inputs
    And section headings should be semantic HTML elements
    And the page should have a descriptive title

  @accessibility @profile
  Scenario: Settings page supports keyboard navigation
    When I navigate through the page using the Tab key
    Then I should be able to focus on all interactive elements
    And the focus order should be logical
    And focused elements should have visible focus indicators

  @data @profile
  Scenario: Profile data is fetched from Clerk authentication
    Given I am logged in with Clerk
    When I view the settings page
    Then my profile data should be fetched from Clerk
    And the full name should match my Clerk profile
    And the email should match my primary email in Clerk

  @performance @profile
  Scenario: Settings page loads quickly
    When I navigate to the settings page
    Then the page should load within 2 seconds
    And my profile information should be displayed immediately
    And there should be no layout shift during loading
