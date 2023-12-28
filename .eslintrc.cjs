module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    '@typescript-eslint/semi': ['error', 'never'],
    quotes: ['error', 'single', {allowTemplateLiterals: true}],
    'unused-imports/no-unused-imports-ts': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': [2, 'never'],
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],
    'space-before-function-paren': ['error', {anonymous: 'always', named: 'never', asyncArrow: 'always'}],
    'vue/no-lone-template': ['error', {
      ignoreAccessible: false,
    }],
    'no-undef': 'off',
    'default-case-last': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {vars: 'all', args: 'none', ignoreRestSiblings: false}],
    'no-console': ['warn'],
    'no-restricted-imports': [
      'error',
      {
        name: '@texturered/eco-vue-js',
        message: 'Use import @texturered/eco-vue-js/dist/',
      },
    ],
  },
  plugins: [
    'unused-imports',
  ],
}
