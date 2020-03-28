   'use strict';

module.exports = {
  extends: 'octane',
  rules: {
    'no-implicit-this': false,
  },
  overrides: [
    {
      files: ['**/*.hbs', '**/*.js'],
      rules: {
        'no-implicit-this': true,
      },
    },
  ],
};
