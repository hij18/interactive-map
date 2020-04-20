module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "indent": [
      "warn",
      4
    ],
    "vue/html-indent": [
      "warn",
      4,
      {
        "attribute": 1,
        "baseIndent": 1,
        "closeBracket": 0,
        "alignAttributesVertically": true,
        "ignores": []
      }
    ],
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "quotes": "warn",
    "comma-dangle": "warn",
    "import/no-unresolved": "warn",
    "import/no-self-import": "warn",
    "no-trailing-spaces": [
      "warn",
      {
        "ignoreComments": true
      }
    ],
    "linebreak-style": "off",
    "prefer-destructuring": [
      "error",
      {
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": false,
          "object": false
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "no-param-reassign": "warn",
    "no-plusplus": "warn",
    "quote-props": [
      "warn",
      "consistent"
    ],
    "max-len": [
      "warn",
      {
        "code": 121,
        "tabWidth": 4,
        "ignoreTemplateLiterals": true,
        "ignoreStrings": true,
        "ignoreUrls": true
      }
    ],
    "global-require": "warn",
    "object-shorthand": [
      "error",
      "always"
    ],
    "object-curly-newline": [
      "error",
      {
        "consistent": true
      }
    ],
    "prefer-promise-reject-errors": "warn"
  },
};
