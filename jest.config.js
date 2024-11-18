/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  preset: 'ts-jest',            // Typescript support
  roots: ['C:\\Users\\bened\\TypescriptTestproject/test'],    // Directories to search for tests
};