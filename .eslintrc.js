module.exports = {
  root: true,
  ignorePatterns: ["**/*.js"],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
    jest: true,
    "cypress/globals": true,
  },
  plugins: ["unused-imports", "cypress"],
  extends: [
    "next",
    "next/core-web-vitals",
    "prettier",
    "plugin:import/typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:cypress/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // To display prettier errors as ESLint errors. Make sure this is always the last configuration.
  ],
  globals: {
    React: "readonly",
  },
  rules: {
    // Separate import groups.
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "import/prefer-default-export": "off",
    "prettier/prettier": "error",
    "unused-imports/no-unused-imports-ts": "error",
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        argsIgnorePattern: "^_", // Ignore method arguments matching this regexp
      },
    ],
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@app", "./app"],
          ["@components", "./components"],
          ["@hooks", "./hooks"],
          ["@layouts", "./layouts"],
          ["@utils", "./utils"],
        ],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      },
    },
    react: {
      version: "detect",
    },
  },
}
