module.exports = {
  "extends": [
    "plugin:@nx/react-typescript",
    "plugin:@typescript-eslint/recommended",
    "next",
    "next/core-web-vitals",
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
        "plugin:@nx/javascript"
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
