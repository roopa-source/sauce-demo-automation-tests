const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'h8ofo2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
