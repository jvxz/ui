import eslintJs from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import tseslint from "typescript-eslint";
import stylistic from '@stylistic/eslint-plugin';
// @ts-ignore
import importPlugin from 'eslint-plugin-import';

export default [
  {
    ignores: [
      "**/node_modules/**/*",
      "**/.next/**/*",
      "node_modules/**",
      ".next/**",
      "dist/**",
      "build/**"
    ],
  },

  ...tseslint.config({
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
      eslintJs.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      eslintReact.configs["recommended-type-checked"],
      stylistic.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@eslint-react/prefer-shorthand-boolean": "warn",
      "@eslint-react/no-array-index-key": "error",
      "@eslint-react/no-children-prop": "error",
      "@eslint-react/no-duplicate-jsx-props": "error",
      "@eslint-react/no-leaked-conditional-rendering": "error",
      "@eslint-react/no-implicit-key": "error",
      "@eslint-react/no-useless-fragment": "warn",
      "@eslint-react/hooks-extra/no-unnecessary-use-callback": "warn",
      "@eslint-react/hooks-extra/no-unnecessary-use-memo": "warn",

      '@stylistic/indent': ['error', 2],
      '@stylistic/jsx-closing-bracket-location': [1, 'props-aligned'],
      '@stylistic/jsx-closing-tag-location': [1, 'line-aligned'],
      "@stylistic/jsx-one-expression-per-line": ["error", { "allow": "non-jsx" }],
      '@stylistic/no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0 }],
      "@stylistic/jsx-max-props-per-line": ["error", { "maximum": 1, "when": "always" }],


      '@stylistic/space-in-parens': ['error', 'never'],

      'import/newline-after-import': 'error',
      'import/no-unresolved': 'off',
      'import/order': ['error', {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        }
      }],
    },
  }),
];