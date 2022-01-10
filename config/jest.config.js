module.exports = {
  rootDir: "../src",
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    ".+\\.(css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/src/utils/jest-helpers/fileMock.js`,
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
}
