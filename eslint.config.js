import tseslint from "typescript-eslint"
import globals from "globals"
import js from "@eslint/js"
import react from "eslint-plugin-react"
import prettier from "eslint-config-prettier"

export default tseslint.config({
    extends: [
        js.configs.recommended,
        ...tseslint.configs.recommended,
        ...tseslint.configs.stylisticTypeChecked,
        prettier,
    ],
    files: ["**/*.{ts,tsx}"],
    linterOptions: {
        reportUnusedDisableDirectives: true,
    },
    ignores: [
        "dist",
        "node_modules",
        "coverage",
        "build",
        "/test-results/",
        "/playwright-report/",
        "**/*.spec.ts",
        "playwright.config.ts",
    ],
    languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
            project: ["./tsconfig.node.json", "./tsconfig.app.json"],
            tsconfigRootDir: import.meta.dirname,
        },
    },
    plugins: {
        react,
    },
    rules: {
        ...react.configs.recommended.rules,
        ...react.configs["jsx-runtime"].rules,
    },
    settings: {
        react: {
            version: "17.0.2",
        },
    },
})
