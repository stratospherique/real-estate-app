module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [
            "warn",
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "import/no-unresolved": "off",
        "no-shadow": "off",
        "camelcase": "off",
        "react/sort-comp": "off",
        "react/destructuring-assignment": "off",
        "react/prop-types": "off",
        "semi": "off",
        "prefer-const": "off",
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
        "react/jsx-one-expression-per-line": "off",
        "jsx-a11y/accessible-emoji": "off",
        "arrow-body-style": "off",
        "eqeqeq": "off",
        "max-len": "off",
        "react/state-in-constructor": "off",
        "comma-dangle": "off",
        "no-unused-vars": "off",
        "react/jsx-wrap-multilines": "off",
        "no-return-assign": "off",
        "operator-linebreak": "off",
        "react/no-unused-state": "off",
        "object-curly-newline": "off",
        "no-alert": "off",
        "no-console": "off",
        "no-nested-ternary": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "react/jsx-indent": "off",
        "indent": "off"
    }
};