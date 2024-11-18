/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules",
    "<rootDir>/dist"
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules",
    "<rootDir>/dist"
  ],
  "watchPathIgnorePatterns": [
    "globalConfig",
  ],
  testEnvironment: "node",
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleDirectories: [
    "node_modules"
  ],
};
