import SignUpPage from "../../pages/SignUpPage";

const email = `user${Date.now()}@mailinator.com`;

Given("I open the Magento sign up page", () => {
  cy.visit("/customer/account/create/");
});

When("I fill the registration form with valid data", () => {
  SignUpPage.fillForm("Varshitha", "BR", email, "Test@1234");
});

When("I submit the form", () => {
  SignUpPage.submit();
});
s
Then("I should see the account dashboard", () => {
  cy.url().should("include", "/customer/account/");
  cy.contains("My Account").should("be.visible");
});
