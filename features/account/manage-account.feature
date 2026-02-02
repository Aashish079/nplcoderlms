Feature: Manage Account Settings
  As a registered user of NPL Coder LMS
  I want to manage my account settings
  So that I can update my information and preferences

  Background:
    Given I am logged in as "Aashish.doe@nplcoder.com"
    And I navigate to the settings page at "/workspace/settings"

  @happy-path @profile-update
  Scenario: Update profile full name successfully
    Given the profile information is editable
    When I click the "Edit" button in the profile section
    And I change my full name to "Aashish Karki"
    And I click the "Save Changes" button
    Then I should see a success message "Profile updated successfully"
    And my full name should be updated to "Aashish Karki"
    And the change should be reflected across the application

  @happy-path @email-update
  Scenario: Update email address with verification
    Given the profile information is editable
    When I click the "Edit" button in the profile section
    And I change my email to "Aashish.Karki@nplcoder.com"
    And I click the "Save Changes" button
    Then I should see a message "Verification email sent to Aashish.Karki@nplcoder.com"
    When I open the verification email
    And I click the verification link
    Then my email should be updated to "Aashish.Karki@nplcoder.com"
    And I should see a confirmation message

  @preferences @theme
  Scenario: Change theme preference to dark mode
    When I scroll to the preferences section
    And I select "Dark" from the theme options
    Then the application theme should change to dark mode immediately
    And the preference should be saved
    And the dark theme should persist across sessions

  @preferences @theme
  Scenario: Change theme preference to light mode
    Given the current theme is "dark"
    When I scroll to the preferences section
    And I select "Light" from the theme options
    Then the application theme should change to light mode immediately
    And the preference should be saved

  @preferences @theme
  Scenario: Set theme to system default
    When I scroll to the preferences section
    And I select "System" from the theme options
    Then the application should follow my system theme preference
    And the theme should change automatically with system settings

  @preferences @notifications
  Scenario: Enable email notifications
    When I scroll to the notification preferences
    And I toggle "Email notifications" to ON
    And I click the "Save Preferences" button
    Then I should see a success message "Preferences saved"
    And I should start receiving email notifications

  @preferences @notifications
  Scenario: Disable course update notifications
    Given email notifications are enabled
    When I scroll to the notification preferences
    And I uncheck "Course updates"
    And I click the "Save Preferences" button
    Then I should not receive notifications about course updates
    But I should still receive other enabled notifications

  @preferences @notifications
  Scenario Outline: Manage different notification types
    When I navigate to notification preferences
    And I set "<notification_type>" to "<status>"
    And I save the preferences
    Then the "<notification_type>" notifications should be "<status>"

    Examples:
      | notification_type     | status   |
      | Course enrollments    | enabled  |
      | New course releases   | enabled  |
      | Achievement badges    | disabled |
      | Weekly digest         | enabled  |
      | Marketing emails      | disabled |

  @password @security
  Scenario: Change password successfully
    When I click on "Change Password"
    And I enter my current password "CurrentPassword123!"
    And I enter a new password "NewSecurePassword123!"
    And I confirm the new password "NewSecurePassword123!"
    And I click "Update Password"
    Then I should see a success message "Password updated successfully"
    And I should be able to login with the new password

  @password @security
  Scenario: Change password fails with incorrect current password
    When I click on "Change Password"
    And I enter an incorrect current password "WrongPassword"
    And I enter a new password "NewSecurePassword123!"
    And I confirm the new password "NewSecurePassword123!"
    And I click "Update Password"
    Then I should see an error message "Current password is incorrect"
    And my password should not be changed

  @password @security
  Scenario: Change password fails with weak new password
    When I click on "Change Password"
    And I enter my current password "CurrentPassword123!"
    And I enter a weak new password "123"
    And I click "Update Password"
    Then I should see an error message "Password must meet complexity requirements"
    And I should see password strength requirements

  @account @two-factor
  Scenario: Enable two-factor authentication
    When I scroll to the security section
    And I click "Enable Two-Factor Authentication"
    Then I should see a QR code to scan
    When I scan the QR code with my authenticator app
    And I enter the verification code from my authenticator
    And I click "Verify and Enable"
    Then I should see a success message "Two-factor authentication enabled"
    And I should be provided with backup codes

  @account @two-factor
  Scenario: Disable two-factor authentication
    Given two-factor authentication is enabled
    When I scroll to the security section
    And I click "Disable Two-Factor Authentication"
    And I enter my password to confirm
    And I enter a verification code from my authenticator
    And I click "Disable"
    Then I should see a success message "Two-factor authentication disabled"

  @account @sessions
  Scenario: View active sessions
    When I scroll to the security section
    Then I should see a list of active sessions
    And each session should show the device type
    And each session should show the location
    And each session should show the last active time

  @account @sessions
  Scenario: Revoke a session
    Given I have multiple active sessions
    When I view the active sessions list
    And I click "Revoke" on a session
    Then I should see a confirmation dialog
    When I confirm the revocation
    Then the session should be removed from the list
    And I should see a message "Session revoked successfully"

  @account @privacy
  Scenario: Update privacy settings
    When I scroll to the privacy section
    And I toggle "Show profile to other users" to OFF
    And I toggle "Share learning progress" to OFF
    And I click "Save Privacy Settings"
    Then I should see a success message "Privacy settings updated"
    And my profile should be hidden from other users

  @account @language
  Scenario: Change interface language
    When I scroll to the preferences section
    And I select "Español" from the language dropdown
    And I click "Save Preferences"
    Then the interface should switch to Spanish
    And the language preference should be saved
    And the language should persist across sessions

  @account @deletion
  Scenario: Request account deletion
    When I scroll to the account management section
    And I click "Delete Account"
    Then I should see a warning message about data loss
    And I should see a confirmation dialog
    When I enter my password to confirm
    And I type "DELETE" in the confirmation field
    And I click "Permanently Delete Account"
    Then my account should be marked for deletion
    And I should receive a confirmation email

  @account @export
  Scenario: Export account data
    When I scroll to the privacy section
    And I click "Export My Data"
    Then I should see a message "Your data export has been requested"
    And I should receive an email when the export is ready
    When I click the download link in the email
    Then I should receive a ZIP file with my data

  @validation @profile-update
  Scenario: Update fails with invalid email format
    Given the profile information is editable
    When I click the "Edit" button in the profile section
    And I change my email to "invalid-email"
    And I click "Save Changes"
    Then I should see an error message "Please enter a valid email address"
    And my email should not be updated

  @ui @feedback
  Scenario: Display loading state during save
    When I click "Save Changes" after making edits
    Then I should see a loading spinner
    And the save button should be disabled
    And I should see "Saving..." text
    Until the save operation completes

  @ui @feedback
  Scenario: Display unsaved changes warning
    Given I have made changes to my profile
    When I try to navigate away from the settings page
    Then I should see a warning dialog
    And the dialog should say "You have unsaved changes"
    And I should have options to "Save", "Discard", or "Cancel"

  @accessibility @account
  Scenario: Settings form is accessible
    When I use keyboard navigation on the settings page
    Then all interactive elements should be reachable
    And form labels should be properly associated
    And error messages should be announced to screen readers
    And success messages should be announced to screen readers
