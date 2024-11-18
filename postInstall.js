const {cp, copyFile} = require("node:fs/promises");

// __dirname is relative to the file location, not where it is being run from
console.log(__dirname)

await cp("./src", "../../src");
await cp("./test", "../../test");
await cp("./types", "../../types");
await copyFile("./jest.config.js", "../../jest.config.js");
await copyFile("./README.md", "../../README.md");
await copyFile("./tsconfig.json", "../../tsconfig.json");
