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
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // //强制使用单引号
    // quotes: ['error', 'single'],
    //在结尾处，强制不使用分号结尾
    // semi: ['error', 'never']
    //使用分号
    semi: ['error', 'always']
  }
}
