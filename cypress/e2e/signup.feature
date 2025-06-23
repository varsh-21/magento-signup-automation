Feature: Magento Sign Up

  Scenario: Create an account with valid details
    Given I visit the signup page
    When I fill the form with valid data
    And I submit the form
    Then I should see the account dashboard
