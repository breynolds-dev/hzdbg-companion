module.exports = {
  "extends": [
    "next",
    "next/core-web-vitals",
    "plugin:@nx/react-typescript",
    "plugin:@typescript-eslint/recommended",
    'plugin:perfectionist/recommended-natural-legacy',
    "./tools/eslint/web.js"
  ],
  "ignorePatterns": [
    "!**/*",
    ".next/**/*",
  ],
  "plugins": [
    "@nx",
    "@stylistic",
    '@stylistic/migrate',
    '@typescript-eslint',
    'perfectionist',
  ],
  "overrides": [
    {
      "extends": [
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ],
      "files": [
        "*.ts",
        "*.tsx",
        "*.js",
        "*.jsx",
      ],
      "rules": {
        "@next/next/no-html-link-for-pages": [
          "error",
          "apps/site/pages"
        ],
        "@stylistic/jsx-sort-props": "error",
        "@stylistic/jsx-max-props-per-line": [
          "error", {
            "maximum": 1,
            "when": "always"
          }
        ],
      },
    },
    {
      "files": [
        "*.js",
        "*.jsx"
      ],
      "extends": [
        "plugin:@nx/javascript",
      ],
      "rules": {}
    },
    {
      "files": [
        "*.spec.ts",
        "*.spec.tsx",
        "*.spec.js",
        "*.spec.jsx",
      ],
      "env": {
        "jest": true,
      },
    },
  ],
}
