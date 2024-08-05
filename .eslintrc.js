module.exports = {
  "extends": [
    "next/core-web-vitals",
    "./eslint/node.js",
  ],
  "ignorePatterns": [
    "**/*"
  ],
  "plugins": [
    "@nx",
    "@stylistic",
    '@stylistic/migrate'
  ],
  "overrides": [
    {
      "files": [
        "*.ts",
        "*.tsx",
        "*.js",
        "*.jsx"
      ],
      "rules": {
        "@stylistic/migrate/migrate-js": "error",
        "@stylistic/migrate/migrate-ts": "error",
        "prettier/prettier": 0,
        "@stylistic/jsx-sort-props": "error",
        "@stylistic/jsx-max-props-per-line": [
          "error", {
            "maximum": 1,
            "when": "always"
          }
        ],
        "@stylistic/jsx-first-prop-new-line": [
          "error",
          "multiline"
        ]
      }
    },
    {
      "files": [
        "*.ts",
        "*.tsx"
      ],
      "extends": [
        "plugin:@nx/typescript",
        "./eslint/shared/typescript-analysis.js",
        "plugin:typescript-sort-keys/recommended"
      ],
      "parserOptions": {
        "project": [
          "./tsconfig.*?.json"
        ]
      },
      "plugins": [
        "typescript-sort-keys"
      ],
      "rules": {}
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
    }
  ]
}
