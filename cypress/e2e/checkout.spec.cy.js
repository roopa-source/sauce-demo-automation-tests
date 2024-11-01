// Scenario: Checkout Process with Valid Information
// Validate that a user can successfully complete the checkout process with all required fields filled.
// Reason for Automation: Ensuring the checkout flow works correctly is crucial, 
// as any issues here directly affect revenue. Automating this provides confidence in the checkout’s reliability.


describe('Checkout Process', () => {
  it('should complete the checkout process', () => {
    // Step 1: Navigate to the login page
    cy.visit('https://www.saucedemo.com/v1/index.html');

    // Step 2: Enter valid username and password
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Step 3: Click the "Login" button
    cy.get('.btn_action').click();

    //Step 4: Add first Item to Cart
    cy.get('.btn_primary.btn_inventory').first().click();

    //Step 5: Go to cart
    cy.get('.shopping_cart_badge').click();

    // Step 6: Proceed to checkout
    cy.get('.btn_action.checkout_button').click();

    // Step 7: Enter valid user details
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');

    //Step 8: click on Contine
    cy.get('.btn_primary.cart_button').click();

    // Step 9: Verify Summary Details
    cy.get('.summary_info').should('be.visible');

    // Step 10 : Finish checkout
    cy.get('.cart_footer a.btn_action.cart_button').should('be.visible');
    cy.get('.cart_footer a.btn_action.cart_button').click();

    //Step 11: Verify checkout Confirmation  Message
    cy.get('h2.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
    cy.get('.complete-text').should('be.visible').and('contain.text', 'Your order has been dispatched');

  });
});

