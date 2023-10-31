const { pathsToModuleNameMapper } = require("ts-jest")

const { compilerOptions } = require("./tsconfig")

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./src",
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/",
    }),
    ".+\\.(css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/utils/jest-helpers/fileMock.js",
  },
}
