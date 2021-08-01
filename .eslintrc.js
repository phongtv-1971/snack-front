// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "jest",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "eqeqeq": ["error"],
    "no-case-declarations": ["off"],
    "no-console": ["error", { allow: ["error"] }],
    "no-prototype-builtins": ["off"],
    "no-unused-vars": ["off"],
    "no-var": ["error"],

    /* ts */
    "@typescript-eslint/camelcase": ["off"],
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/interface-name-prefix": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-inferrable-types": ["off"],
    "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "after-used", "argsIgnorePattern": "^_", "ignoreRestSiblings": true }],
    "@typescript-eslint/no-use-before-define": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],

    /* React */
    "react/display-name": ["off"],
    "react/prop-types": ["off"],

    /* Jest */
    "jest/expect-expect": ["off"],
    "jest/no-commented-out-tests": ["off"],
  },
}
