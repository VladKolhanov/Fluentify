import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    ignores: ["eslint.config.mjs", "node_modules"],
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "@next/next": nextPlugin,
    },
    rules: {
      /** Recommended rules */
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      /* Rules from eslint/js */
      "no-duplicate-imports": "error",
      "no-template-curly-in-string": "error",
      "dot-notation": "error",
      eqeqeq: "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-eval": "error",
      "no-magic-numbers": ["error", { ignore: [1] }],
      "no-useless-catch": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-template": "error",

      /* Rules from eslint-plugin-react */
      "react/boolean-prop-naming": [
        "error",
        { rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+" },
      ],
      "react/function-component-definition": [
        "warn",
        {
          namedComponents: ["arrow-function", "function-declaration"],
        },
      ],
      "react/hook-use-state": ["error", { allowDestructuredState: true }],
      "react/jsx-fragments": ["error", "syntax"],
      "react/jsx-no-leaked-render": ["error", { validStrategies: ["coerce"] }],
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-props-no-spread-multi": "error",
      "react/no-this-in-sfc": "error",
      "react/style-prop-object": "error",
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],

      /* Rules from typescript-eslint */
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unnecessary-template-expression": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/no-unsafe-type-assertion": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/prefer-literal-enum-member": "error",
      "@typescript-eslint/prefer-reduce-type-parameter": "error",
      "@typescript-eslint/prefer-string-starts-ends-with": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/unified-signatures": "error",
      "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
    },
  },
];
