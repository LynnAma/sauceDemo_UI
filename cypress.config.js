const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 80000,
  pageLoadTimeout: 60000,
  watchForFileChanges: false,
  viewportWidth: 1280,
  viewportHeight: 800,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      const baseUrl =
        config.env.APP_ENV === "production"
          ? "https://google.com/"
          : "https://www.saucedemo.com/";

      config.baseUrl = baseUrl;

      return config;
    },

    
  },
});
