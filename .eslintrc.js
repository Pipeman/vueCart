// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // allow reassignment of function parameters only when modifying their props
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow hoisting of functions
    'no-use-before-define': ['error', { 'functions': false }],
    // allow warning and error messages in the console
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // allow non returning or non assigning ternary expressions
    'no-unused-expressions': ['error', { 'allowTernary': true }],
    // allow the use of parameters with the same name of a variable defined in the outer scope
    'no-shadow': ['off']
  }
}
