module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true
        },
        sourceType: "module"
      },
      env: {
        browser: true,
        node: true,
        jest: true,
        "cypress/globals": true
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:cypress/recommended",
        "plugin:import/typescript",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:prettier/recommended" // To display prettier errors as ESLint errors. Make sure this is always the last configuration.
      ],
      plugins: ["prettier", "cypress"],
      rules: {
        // Separate import groups.
        "import/order": [
          "error",
          {
            "newlines-between": "always"
          }
        ],
        "prettier/prettier": "error",
        "import/prefer-default-export": "off",
        "react/prop-types": 0, // prop-types are irrelevant with TypeScript
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "cypress/no-assigning-return-values": "error",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/no-non-null-assertion": 0
      },
      settings: {
        "import/resolver": {
          // Allow `@/` to map to `src/client/`
          alias: {
            map: [
              ["@assets", "./src/assets"],
              ["@layouts", "./src/layouts"],
              ["@utils", "./src/utils"]
            ],
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
          }
        },
        react: {
          version: "detect"
        }
      }
    },
    {
      files: ["*.md", "*.mdx"],
      extends: ["plugin:mdx/recommended"],
      parserOptions: {
        extensions: [".md", ".mdx"]
      },
      globals: {
        // MDXRenderer components
        CallSummaryTable: "readonly",
        ContactFormToggle: "readonly",
        InlineImage: "readonly",
        Label: "readonly",
        Link: "readonly",
      },
      settings: {
        "mdx/code-blocks": true
      }
    }
  ]
};
