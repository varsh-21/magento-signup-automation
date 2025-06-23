class SignUpPage {
  static fillForm(first, last, email, password) {
    cy.get("#firstname").type(first);
    cy.get("#lastname").type(last);
    cy.get("#email_address").type(email);
    cy.get("#password").type(password);
    cy.get("#password-confirmation").type(password);
  }

  static submit() {
    cy.get('button[title="Create an Account"]').click();
  }
}

export default SignUpPage;
