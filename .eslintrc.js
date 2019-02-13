module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
  },
  // https://joe-re.hatenablog.com/entry/2018/01/02/230806
  // babel-eslint → @typescript-eslint/parser へ変更
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  // https://github.com/nuxt/nuxt.js/issues/200#issuecomment-411542116
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.ts', '.vue'],
      },
    },
  },
  // *.vue ファイルを lint にかけるために必要
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  // ここにカスタムルールを追加します。
  rules: {
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "no-bitwise": ["error", { "int32Hint": true }],
    "no-param-reassign": ["error", { "props": false }],
    "no-use-before-define": 0,
    "prefer-destructuring": ["error", {"object": true, "array": false}]
  }
}
