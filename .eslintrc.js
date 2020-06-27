const path = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "@typescript-eslint", "jsx-a11y"],
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    createDefaultProgram: true,
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  globals: {
    __dirname: true,
    module: true,
    BUILD_TYPE: true,
    TARGET_ENV_TYPE: true,
    API_BASE_URL: true,
  },
  overrides: [
    {
      files: ["*.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "newline-after-var": "off",
      },
    },
  ],
  rules: {
    // prettier rules
    "max-len": [
      "error",
      { code: 100, ignoreStrings: true, ignoreTemplateLiterals: true },
    ],
    indent: ["error", 2],
    semi: ["error", "always"],
    "comma-dangle": ["error", "only-multiline"],
    "object-curly-spacing": ["error", "always"],
    quotes: ["error", "double"],
    "arrow-parens": ["error", "always"],
    "linebreak-style": 0,

    // override airbnb
    "no-console": ["off", "always"],
    "no-use-before-define": ["error", { functions: false }],
    "operator-linebreak": ["error", "before", { overrides: { "=": "after" } }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/prefer-default-export": "off",

    "array-bracket-newline": ["error", { minItems: 2 }],
    "array-element-newline": ["error", { minItems: 2 }],
    "object-curly-newline": [
      "error",
      {
        /* ObjectExpression: "always",
        ObjectPattern: {multiline: true}, */
        ImportDeclaration: {
          multiline: true,
          minProperties: 2,
          consistent: true,
        },
        ExportDeclaration: { multiline: true, minProperties: 2 },
      },
    ],
    "object-property-newline": "error",

    // For hooks
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,

    // 👇🏻 `@typescript-eslint` overrides
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/ban-ts-ignore": 0,

    "no-undefined": 0,
    complexity: ["error", 10],
    "func-names": 0,
    "class-methods-use-this": 0,

    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/sort-comp": [
      2,
      {
        order: [
          "static-methods",
          "instance-variables",
          "getters",
          "setters",
          "lifecycle",
          "everything-else",
          "rendering",
        ],
        groups: {
          rendering: ["render", "/^render.+$/"],
        },
      },
    ],
    "react/require-optimization": 0,

    // tsc already catches these kind of errors
    "no-undef": 0,

    "react/jsx-max-props-per-line": ["error", { maximum: 1, when: "always" }],
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],

    "react/jsx-no-literals": ["error", { noStrings: false }],
    "react/no-unused-state": "error",

    indent: ["error", 2, { SwitchCase: 1 }],
    "array-bracket-newline": ["error", { minItems: 2 }],
    "array-element-newline": ["error", { minItems: 2 }],
    "object-curly-newline": [
      "error",
      {
        /* ObjectExpression: "always",
        ObjectPattern: {multiline: true}, */
        ImportDeclaration: {
          multiline: true,
          minProperties: 2,
          consistent: true,
        },
        ExportDeclaration: { multiline: true, minProperties: 2 },
      },
    ],
    "object-property-newline": "error",
    "import/extensions": "off",
  },
};
