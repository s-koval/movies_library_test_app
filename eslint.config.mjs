import { dirname } from "path";
import { fileURLToPath } from "url";

import eslintPluginImport from 'eslint-plugin-import'

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      "import/no-anonymous-default-export": "off",
      "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "*",
            group: "external",
            position: "before",
          },
          {
            pattern: "@core/components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@core/api/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@core/app/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@core/constants/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@core/providers/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@core/theme/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@core/types/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@core/interfaces/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@core/utils/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    },
    
  }
];

export default eslintConfig;
