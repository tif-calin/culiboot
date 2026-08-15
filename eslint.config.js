import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "build", ".react-router"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "max-len": ["warn", { code: 100 }],
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
          /* React Router route module exports */
          allowExportNames: [
            "action",
            "clientAction",
            "clientLoader",
            "handle",
            "headers",
            "links",
            "loader",
            "meta",
            "shouldRevalidate",
          ],
        },
      ],
    },
  },
);
