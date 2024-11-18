const {cp, copyFile} = require("node:fs/promises");
const path = require('node:path');

(async () => {
  await cp(path.resolve(__dirname, "./src"), path.resolve(__dirname, "../../src"), { recursive: true });
  await cp(path.resolve(__dirname, "./test"), path.resolve(__dirname, "../../test"), { recursive: true });
  await cp(path.resolve(__dirname, "./types"), path.resolve(__dirname, "../../types"), { recursive: true });
  await copyFile(path.resolve(__dirname, "./jest.config.js"), path.resolve(__dirname, "../../jest.config.js"));
  await copyFile(path.resolve(__dirname, "./README.md"), path.resolve(__dirname, "../../README.md"));
  await copyFile(path.resolve(__dirname, "./tsconfig.json"), path.resolve(__dirname, "../../tsconfig.json"));
})();
