// Scenario: Ensure that when a user adds an item to the cart, 
// the cart counter in the header updates to show the correct item count.
// Reason for Automation:  
// Cart functionality is essential in e-commerce. 
// Automating this test ensures that adding items reflects accurately in the cart counter, 
// confirming the cart's reliability and preventing any regressions that might disrupt user experience.


describe('Add Item to Cart and Verify Counter Update', () => {
  it('should update the cart counter when an item is added to the cart', () => {

    // Step 1: Log in with valid credentials
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('.btn_action').click();

    // Step 2: Add the first item on the inventory page to the cart
    cy.get('.btn_primary.btn_inventory').first().within(() => {
      cy.contains('ADD TO CART').click();
    });

    // Step 3: Verify that the cart counter updates to "1"
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });
});
