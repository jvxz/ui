import antfu from '@antfu/eslint-config'
import cssPlugin from '@eslint/css'

export default antfu({
  react: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
    overrides: {
      'ts/no-floating-promises': 'error',
      'ts/consistent-type-imports': 'error',
      'react/no-leaked-conditional-rendering': 'error',
    },
  },

  plugins: {
    css: cssPlugin,
  },

  formatters: {
    css: 'prettier',
  },

  rules: {
    'react/prefer-shorthand-boolean': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-duplicate-jsx-props': 'error',
    'react/no-implicit-key': 'error',
    'react/no-useless-fragment': 'error',
    'react-hooks-extra/no-unnecessary-use-callback': 'error',
    'react-hooks-extra/no-unnecessary-use-memo': 'error',
    'react-dom/no-unknown-property': 'error',

    'style/multiline-ternary': ['error', 'always-multiline'],
    'style/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'var',
        next: 'return',
      },
    ],
    'style/object-curly-newline': ['error', {
      ObjectExpression: 'always',
      ObjectPattern: {
        multiline: true,
      },
      ImportDeclaration: 'never',
      ExportDeclaration: {
        multiline: true,
        minProperties: 3,
      },
    }],
    'style/indent': ['error', 2],
    'style/jsx-closing-bracket-location': [1, 'line-aligned'],
    'style/jsx-closing-tag-location': [1, 'line-aligned'],
    'style/jsx-one-expression-per-line': ['error', {
      allow: 'non-jsx',
    }],
    'style/no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
    }],
    'style/jsx-max-props-per-line': ['error', {
      maximum: 1,
      when: 'always',

    }],
    'style/space-in-parens': ['error', 'never'],
    'antfu/if-newline': 'off',

    'import/newline-after-import': 'error',
    'import/no-unresolved': 'off',
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal'],
      'newlines-between': 'always',
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
      },
    }],
    'perfectionist/sort-imports': 'off',
    'ts/strict-boolean-expressions': 'off',
    'node/prefer-global/process': 'off',
    'react-refresh/only-export-components': 'off',
  },
})
