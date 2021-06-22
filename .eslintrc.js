module.exports = {
  extends: [
    'react-app',
    'prettier',
    'prettier/react',
    'plugin:cypress/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: ['prettier', 'cypress'],
  env: {
    browser: true,
    node: true,
    jest: true,
    'cypress/globals': true
  },
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn'
  },
  settings: {
    'import/resolver': {
      // Allow `@/` to map to `src/client/`
      alias: {
        map: [
          ['@components', './src/components'],
          ['@contexts', './src/contexts'],
          ['@images', './src/images'],
          ['@layouts', './src/layouts'],
          ['@utils', './src/utils']
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
      }
    }
  }
}
