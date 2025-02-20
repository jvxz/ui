import eslintJs from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import tseslint from "typescript-eslint";
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config({
  files: ["**/*.ts", "**/*.tsx"],
  extends: [
    eslintJs.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    eslintReact.configs["recommended-type-checked"],
    stylistic.configs.recommended,
  ],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
    },
  },
  rules: {
    // Put rules you want to override here
    "@eslint-react/prefer-shorthand-boolean": "warn",
    '@stylistic/indent': ['error', 2],

  },
});