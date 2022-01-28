module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["draft"] },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "no-console": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
};