### Test Plan for Sauce Demo Website

# 1. Purpose

This document outlines the test plan for the Sauce Demo website, focusing on its primary e-commerce functionalities. The goal is to ensure a seamless user experience by verifying critical features, detecting bugs, and assessing the website’s responsiveness across different devices.


# 2. Scope

In Scope:

•   Login: 
    Verify successful and unsuccessful login attempts, 
    input validation, and boundary testing for credentials.
    
•   Product Inventory: 
    Check product display, sorting, and detail view.
    
•   Cart Management: 
    Ensure adding/removing items updates the cart.
    
•   Checkout: 
    Validate the checkout process from start to confirmation, including input validation.


Out of Scope:

•   Performance and load testing

•   Security testing


# 3. Testing Strategy

Types of Testing:

•   Functional Testing: Ensure features perform as intended.

•   End-to-End Testing: Test complete user flows.

•   Regression Testing: Confirm stability after changes.

•   Input Validation and Boundary Testing: Verify input handling for expected and edge-case values.

Environment:
•   URL: https://www.saucedemo.com/v1/index.html

•   Browsers: Chrome, Firefox, Safari, Edge

•	Devices: Desktop (Windows, macOS), Tablet, and Mobile (Android, iOS)

•	Test Data: Use predefined and randomized data for login, product selection, and checkout.


# 4. Test Scenarios
4.1 Login
1.  Login with Valid Credentials – Verify successful login and access to the inventory page.
2.  Login with Invalid Credentials – Check error message for incorrect credentials.
3.  Boundary Testing for Password – Test minimum and maximum character limits for the password field.
4.  Empty Input Validation – Ensure proper error messages display when fields are left blank.

4.2 Product Inventory
1.  Products Load on Inventory Page – All products display correctly.
2.  Sort Products by Price (Low to High) – Products sort in ascending price order.
3.  View Product Details – Click a product to open its details page and confirm correct display.

4.3 Cart Management
1.  Add Product to Cart – Product count updates in the cart icon after adding an item.
2.  Remove Product from Cart – Product count decreases accordingly.
3.  Boundary Testing for Cart Quantity – Verify behavior when cart has maximum allowable items.

4.4 Checkout Process
1.  Complete Checkout with Valid Information – User completes checkout and receives an order confirmation.
2.  Input Validation for Checkout Fields – Check that invalid or missing data is flagged correctly.
3.  Boundary Testing for Postal Code – Test maximum and minimum values allowed in the postal code field.
4.  User Flow for Checkout – Navigate from login to checkout without interruption.

Responsive Design
1.	Mobile View: Test the site layout on mobile devices (portrait and landscape).
2.	Tablet View: Check layout on tablets.
3.	Desktop View: Ensurxe all elements are accessible on larger screens.

5.6 Session Management
1.	Session Persistence: Verify session and cart contents persist after refresh or navigation.
2.	Session Expiry: Ensure sessions expire after a set period of inactivity, if applicable.

# 5. Tools

Automation Tool: Cypress

Test Framework: Mocha (provided by Cypress)

Test Execution: Tests will be executed locally and in CI pipelines (if integrated). Tests will run in different browsers (Chrome, Firefox, Edge) to ensure cross-browser compatibility.

Cypress: Chosen for its speed and ease of use with modern web applications, making it ideal for verifying UI interactions.

 Mocha & Chai: These frameworks integrate well with Cypress, providing a readable structure for test cases, especially useful for input validation and error handling.
 
 GitHub & CI/CD Integration: Integrating Cypress tests with GitHub Actions or Jenkins enables continuous testing upon each code update, ensuring stability in each deployment.

Reporting: Cypress Dashboard

# 6. Deliverables

•   Test Cases: Documented with steps and expected results (Cypress/e2e folder)

•   Bug Reports: Documented in the repository’s issues section (https://github.com/roopa-source/sauce-demo-automation-tests/issues)

•   Test Summary Report: Reports will be generated in the Cypress dashboard after test execution.

•	Test execution results will be available in both detailed and summarized forms, Summary of pass/fail results for each scenario.

# 7. Schedule
•  Test Case Design: 1 day

•  Test Execution: 1 day

•  Bug Reporting: Ongoing


# 8. Approval

•  Test results and any identified issues will be reviewed by stakeholders before approval and deployment.
