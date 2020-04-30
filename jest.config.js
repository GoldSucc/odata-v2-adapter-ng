module.exports = {
  reporters: ["default"],
  automock: false,
  bail: false,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["**/index.js", "!**/srv/**/*.js", "!**/test/**/*.js", "!**/integration-test/**/*.js"],
  coverageDirectory: "reports/coverage/unit/",
  coverageReporters: ["lcov", "text"],
  coverageThreshold: {
    global: {
      branches: 76,
      functions: 90,
      lines: 88,
      statements: 87
    }
  },
  moduleDirectories: ["node_modules"],
  modulePathIgnorePatterns: [],
  resetMocks: false,
  resetModules: false,
  testMatch: ["**/test/**/*-test.js"],
  testPathIgnorePatterns: ["/node_modules/"],
  testURL: "http://localhost/",
  verbose: true
};
