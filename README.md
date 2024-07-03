Personal template that cointains Expo Go, Typescript, and Zustand. Also includes prettier, husky and eslint setup boilerplate.

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Setup Prettier

We have to setup prettier config for the coding standard and discipline.

1. Go to VSCode Extensions and install Prettier.
2. Modify or Add .prettierrc.js

```bash
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  singleQuote: true,
  semi: true,
  printWidth: 100,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'es5',
  endOfLine: 'auto',
};
```

3. Modify Workspace Settings. navigate 'File > Preferences > Settings'
4. Make sure you are in 'Workspace' Tab and not 'User' Tab
5. Set Prettier as 'Default Formatter' navigate 'File > Preferences > Settings' and search 'Formatter'
6. Enable 'Format On Save' navigate 'File > Preferences > Settings' and search 'Format On Save'

## Step 2: Setup ESLint

Setting up our own linting rules

1. Install eslint and plugins run. `yarn add eslint eslint-plugin-unused-imports eslint-plugin-simple-import-sort --dev`
2. Modify eslintrc.js

```bash
module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['unused-imports', 'simple-import-sort'],
  rules: {
    'no-unused-vars': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^react', '^@?\\w'],
          ['^(@|components)(/.*|$)'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.?(css)$'],
        ],
      },
    ],
    'react-native/no-inline-styles': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
```

3. Rules are

```
- Do not allow unused imports
- Do not allow unused variable
- Do not allow inline styles
- Proper imports sort *error but fixable*
  Order:
    - React related imports *react, react-native*
    - Internal packages *@|components*
    - Side imports *import script.ts*
    - Parent imports *../*
    - Other relative imports. *./ - same folder imports*
    - Styles imports *.css, .scss*
- Prettier rules
```

## Step 3: Setup husky for commiting validations

Added pre-commit validation

1. Install husky `yarn add husky --dev`
2. Install lint-staged `yarn add lint-staged --dev`
3. Configure lint-staged in package.json

```bash
{
  ...,
  "lint-staged": {
    "src/**/*.{js,ts,tsx}": "eslint"
  }
}
```

4. Init husky `npx husky-init`
5. You should be able to see .husky folder
6. Install .husky dependencies `yarn install`
7. Add pre-commit hook `npx husky add .husky/pre-commit "yarn lint-staged"`
