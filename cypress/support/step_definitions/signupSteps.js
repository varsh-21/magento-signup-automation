import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignUpPage from "../../pages/SignUpPage";

Given("I visit the signup page", () => {
  cy.visit("/customer/account/create/");
});

When("I fill the form with valid data", () => {
  const timestamp = Date.now();
  const email = `user${timestamp}@example.com`;
  SignUpPage.fillForm("Varshitha", "BR", email, "Test@1234");
});

When("I submit the form", () => {
  SignUpPage.submit();
});

Then("I should see the account dashboard", () => {
  cy.contains("My Account").should("be.visible");
});
