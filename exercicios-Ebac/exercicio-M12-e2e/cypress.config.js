const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    "viewportHeight": 1080,
    "viewportWidth": 1920,
    "chromeWebSecurity": false,
    "defaultCommandTimeout": 50000,
    "requestTimeout": 50000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
