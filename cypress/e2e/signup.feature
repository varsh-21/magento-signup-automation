Feature: Magento Sign Up

  Scenario: Create an account with valid details
    Given I open the Magento sign up page
    When I fill the registration form with valid data
    And I submit the form
    Then I should see the account dashboard
