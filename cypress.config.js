const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      });

      on("file:preprocessor", bundler);
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://magento.softwaretestingboard.com",
  },
  video: true, // ✅ Enable video recording
  screenshotsFolder: 'cypress/screenshots', // Optional: customize screenshot path
  videosFolder: 'cypress/videos', // Optional: customize video path
});
