
# Sauce Demo Automation Tests

This repository contains automated tests for the Sauce Demo website using Cypress.

## Table of Contents

- [Installation](#installation)
- [Running Tests](#running-tests)
- [Tests Overview](#tests-overview)
- [Contributing](#contributing)
- [License](#license)

Cypress Install
---------------
npm init
npm install cypress --save-dev   (install cypress)

## Runing a Test
```
1. In the terminal, perform `npm run test` to start the script execution
```

## Alternative Commands
npx cypress open   (open cypress)
npx cypress run (run through terminal directly in headless mode)
npx cypress run --headed (run which opens browser)
npx cypress run --headed --spec "path of specific test"


Framework
----------
Mocha (suggested by cypress and it is default)


Folder structure
----------------
fixture (test data)
e2e (Tests)
plugin (event listener)
screenshots
support (reusable test)
videos  (recorded videos)
cypress.json (override default setting configurations for runner)
cypress/notes/TestingApproach.txt  (explained test approach and reason for cypress tool selection)



## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sauce-demo-automation-tests.git
 2.  cd sauce-demo-automation-tests


### Reports used
- Spec Report (default)

### Sample Report 
(/sauce-demo-automation-tests/cypress/screenshots)
Screenshot 2024-10-30 at 07.30.45.png
Screenshot 2024-10-30 at 18.15.50.png
Screenshot 2024-10-30 at 19.12.15.png
