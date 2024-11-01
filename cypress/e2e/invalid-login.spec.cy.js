// Scenario: Verify that attempting to log in with incorrect credentials displays an error message without redirecting.
// Reason for Automation: This is a common negative test case essential for security and user feedback. 
// Automating it helps ensure consistent handling of incorrect credentials across all environments.

describe('Invalid Login', () => {
  it('should display an error message with invalid credentials', () => {
    // Step 1: Navigate to the login page
    cy.visit('https://www.saucedemo.com/v1/index.html');

    // Step 2: Enter Invalid username and password
    cy.get('#user-name').type('invalid_user');
    cy.get('#password').type('wrong_password');

    //Step 3: Click the "Login" button
    cy.get('.btn_action').click();

    // Step 4: Verify error message
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match');
  });
});
