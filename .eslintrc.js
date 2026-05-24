module.exports = {
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  plugins: ['import', 'react', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/namespace': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: [
        '**/__tests__/**',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/__mocks__/**',
      ],
      env: {
        jest: true,
      },
      rules: {
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'no-shadow': 'off',
      },
    },
  ],
};
