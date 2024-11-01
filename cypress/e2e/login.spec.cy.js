// Scenario: Login with Valid Credentials
// Validate that a user can successfully log in using correct credentials and is redirected to the inventory page.
// Reason for Automation: Login is a critical entry point for users, 
// and issues with login can prevent access to the entire application. 
// Automating this test ensures that the login functionality works as expected and helps detect regressions quickly.


describe('Login with Valid Credentials', () => {
  it('should allow user to log in with valid credentials and redirect to inventory page', () => {
    // Step 1: Navigate to the login page
    cy.visit('https://www.saucedemo.com/v1/index.html');

    // Step 2: Enter valid username and password
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Step 3: Click the "Login" button
    cy.get('.btn_action').click();

    // Step 4: Verify that the user is redirected to the inventory page
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible'); // confirm inventory items are visible
  });
});
