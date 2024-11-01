// Scenario: Remove an Item from Cart
// Verify that when an item is removed from the cart, the cart counter in the header is updated accordingly to reflect the removal.
// Reason for Automation: 
// Ensuring that items can be correctly removed from the cart is crucial for the shopping experience. 
// Automating this test confirms that cart interactions behave as expected and are accurately reflected in the cart counter, 
// which is important for user confidence and reliability.

describe('Remove Item from Cart', () => {
  it('should remove an item from the cart', () => {
    // Step 1: Navigate to the login page
    cy.visit('https://www.saucedemo.com/v1/index.html');

    // Step 2: Enter valid username and password
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Step 3: Click the "Login" button
    cy.get('.btn_action').click();

    // Step 4: Add the first item to the cart
    cy.get('.btn_primary.btn_inventory').first().click();

    // Step 5: Go to cart
    cy.get('.shopping_cart_badge').click();

    // Step 6: Remove item
    cy.get('.btn_secondary.cart_button').click();

    // Step 7: Verify cart is empty
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
