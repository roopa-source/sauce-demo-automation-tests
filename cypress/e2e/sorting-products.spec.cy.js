// Scenario: Sort Products by Price (Low to High)
// Ensure that selecting the "Price (Low to High)" sorting option arranges the products in ascending order of price.
// Reason for Automation:
//  Sorting is a core feature for shopping sites, impacting user experience and product accessibility. 
// Automating it helps verify that products are ordered correctly, enhancing usability and preventing regressions.

describe('Sort Products by Price (Low to High)', () => {
  it('should display products in ascending order when sorted by price (Low to High)', () => {
    // Step 1: Log in with valid credentials
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('.btn_action').click();

    // Step 2: Navigate to the inventory page and select sorting by "Price (Low to High)"
     cy.get('.product_sort_container').select('Price (low to high)');

    // Step 3: Verify that items are sorted in ascending order
    cy.get('.inventory_item_price').then(($prices) => {
      // Extract the prices into an array and convert them to numbers
      const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')));

      // Step 4: Assert that each price is less than or equal to the following price (ascending order)
      for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).to.be.lte(prices[i + 1]);
      }
    });
  });
});
