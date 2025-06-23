module.exports = {
    default: {
      require: ["cypress/e2e/steps/*.js"], // <-- step definitions
      format: ["html:test-artifacts/report.html"],
    },
  };
  