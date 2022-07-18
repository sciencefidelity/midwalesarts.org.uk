module.exports = {
  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "promise",
    "unicorn",
    "eslint-plugin-tsdoc",
  ],
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:@next/next/recommended",
    "prettier",
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    // Allow specific cases from Sanity
    "no-underscore-dangle": [
      "error",
      { allow: ["__i18n_lang", "__i18n_refs", "_id", "_type", "_key"] },
    ],
    // https://basarat.gitbook.io/typescript/main-1/defaultisbad
    // Next uses default export to route pages so we'll use a different paradigm for them
    "import/prefer-default-export": "off",
    "import/no-default-export": "off",
    // It's not accurate in the monorepo style
    "import/no-extraneous-dependencies": "off",
    // Allow most functions to rely on type inference
    // @typescript-eslint/explicit-module-boundary-types
    // will ensure exports are typed
    "@typescript-eslint/explicit-function-return-type": "off",
    // React adds the import in compile stage since v17
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    "react/react-in-jsx-scope": "off",
    // Next `_app.tsx` uses this
    "react/jsx-props-no-spreading": "off",
    // The standard Next.js pattern for pages is arrow functions with `NextPage`.
    // For components it seems better to use `function-declaration` so that the
    // return statement is required to help with refactoring,
    // the `arrow-body-style` rule prefers arrows without the return block
    "react/function-component-definition": [
      2,
      { namedComponents: ["arrow-function", "function-declaration"] },
    ],
    // This is useful Typescript where string does not satisfy the expected
    // return type of JSX.Element.
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    // Airbnb prefers forEach
    "unicorn/no-array-for-each": "off",
    // This was flagging filenames like `next-env.d.ts`
    "unicorn/prevent-abbreviations": "off",
    // The builtin Next image element does not play nice with the Sanity CDN
    "@next/next/no-img-element": 0,
    // Hard to know what to choose here, Airbnb prefers PascalCase,
    // the default in Unicorn is kebab-case,
    // Nextjs uses lowercase for pages and kebab-case for components in examples
    "unicorn/filename-case": [
      "error",
      { case: "camelCase", ignore: ["next-env.d.ts"] },
    ],
    // Disable JSDoc and setup linting of TSDoc
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "tsdoc/syntax": "warn",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        // Allow CJS until ESM support improves
        "@typescript-eslint/no-var-requires": "off",
        "unicorn/prefer-module": "off",
      },
    },
  ],
};
