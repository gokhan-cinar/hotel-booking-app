module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/no-v-html': 0,
    'no-console': 0
  }
}
