import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import checkFile from 'eslint-plugin-check-file'
import importPlugin from 'eslint-plugin-import'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tailwind from 'eslint-plugin-tailwindcss'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import jest from 'eslint-plugin-jest'
import playwright from 'eslint-plugin-playwright'
import storybook from 'eslint-plugin-storybook'

const disallowProcessEnv = {
	files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
	ignores: ['src/configs/env.ts'],
	rules: {
		'no-restricted-properties': [
			'error',
			{
				object: 'process',
				property: 'env',
				message:
					"Use `import { env } from '@/configs/env'` instead to ensure validated types.",
			},
		],
		'no-restricted-imports': [
			'error',
			{
				paths: [
					{
						name: 'process',
						importNames: ['env'],
						message:
							"Use `import { env } from '@/configs/env'` instead to ensure validated types.",
					},
				],
			},
		],
	},
}

const jestConfig = {
	files: ['**/*.test.{js,mjs,cjs,ts,jsx,tsx}'],
	...jest.configs['flat/recommended'],
	rules: {
		...jest.configs['flat/recommended'].rules,
		'jest/consistent-test-it': [
			'warn',
			{
				fn: 'it',
				withinDescribe: 'it',
			},
		],
	},
}

const playwrightConfig = {
	files: ['e2e/**'],
	...playwright.configs['flat/recommended'],
	rules: {
		...playwright.configs['flat/recommended'].rules,
	},
}

const storybookConfig = {
	files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
	...storybook.configs['flat/recommended'],
	rules: {},
}

/** @type {import('eslint').Linter.Config[]} */
export default [
	disallowProcessEnv,
	jestConfig,
	playwrightConfig,
	storybookConfig,

	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{
		ignores: [
			'.storybook',
			'**/*.config.{js,mjs,cjs,ts,jsx,tsx}',
			'node_modules',
			'.lintstagedrc.js',
		],
	},
	{
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
				},
			},
		},
	},
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node, ...globals.jest },
		},
	},
	pluginJs.configs.recommended,
	jsxA11y.flatConfigs.recommended,
	importPlugin.flatConfigs.recommended,
	eslintConfigPrettier,
	eslintPluginPrettier,
	...tailwind.configs['flat/recommended'],
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
			'react-hooks': reactHooksPlugin,
			'check-file': checkFile,
			'simple-import-sort': simpleImportSort,
			'@next/next': nextPlugin,
		},
		rules: {
			/** Recommended rules */
			...reactPlugin.configs.recommended.rules,
			...reactPlugin.configs['jsx-runtime'].rules,
			...reactHooksPlugin.configs.recommended.rules,
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,

			/* Rules from eslint/js */
			'no-duplicate-imports': 'error',
			'no-template-curly-in-string': 'error',
			eqeqeq: 'error',
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-eval': 'error',
			'no-magic-numbers': ['error', { ignore: [1] }],
			'no-useless-catch': 'error',
			'no-var': 'error',
			'prefer-template': 'error',
			'no-unreachable': 'error',

			/* Rules from eslint-plugin-react */
			'react/boolean-prop-naming': [
				'error',
				{ rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' },
			],
			'react/function-component-definition': [
				'warn',
				{
					namedComponents: ['arrow-function', 'function-declaration'],
				},
			],
			'react/hook-use-state': ['error', { allowDestructuredState: true }],
			'react/jsx-fragments': ['error', 'syntax'],
			'react/jsx-no-leaked-render': ['error', { validStrategies: ['coerce'] }],
			'react/jsx-no-useless-fragment': 'error',
			'react/jsx-props-no-spread-multi': 'error',
			'react/no-this-in-sfc': 'error',
			'react/style-prop-object': 'error',
			'react/self-closing-comp': [
				'error',
				{
					component: true,
					html: true,
				},
			],

			/* Rules from typescript-eslint */
			'@typescript-eslint/array-type': 'error',
			'@typescript-eslint/consistent-indexed-object-style': 'error',
			'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
			'@typescript-eslint/no-unnecessary-condition': 'error',
			'@typescript-eslint/no-unnecessary-qualifier': 'error',
			'@typescript-eslint/no-unnecessary-template-expression': 'error',
			'@typescript-eslint/no-unnecessary-type-arguments': 'error',
			'@typescript-eslint/no-unsafe-type-assertion': 'error',
			'@typescript-eslint/no-useless-empty-export': 'error',
			'@typescript-eslint/prefer-literal-enum-member': 'error',
			'@typescript-eslint/prefer-reduce-type-parameter': 'error',
			'@typescript-eslint/prefer-string-starts-ends-with': 'error',
			'@typescript-eslint/promise-function-async': 'error',
			'@typescript-eslint/unified-signatures': 'error',
			'@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',

			/* Rules from eslint-plugin-check-file */
			'check-file/filename-naming-convention': [
				'error',
				{
					'**/*.{ts,tsx}': 'KEBAB_CASE',
				},
				{
					ignoreMiddleExtensions: true,
				},
			],
			'check-file/folder-naming-convention': [
				'error',
				{
					'src/app/**/*': 'NEXT_JS_APP_ROUTER_CASE',
					'src/!(app)/**/*': 'KEBAB_CASE',
				},
			],

			/* Rules from eslint-plugin-simple-import-sort and eslint-plugin-import */
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^\\uFEFF?', '^"use (client|server)"'],
						['^@?[a-z]'],
						['^@/(?!styles)'],
						['^\\.'],
						['^@/styles', '^.+\\.s?css$'],
					],
				},
			],
			'simple-import-sort/exports': 'error',
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/no-duplicates': 'error',

			/* Rules from eslint-plugin-prettier */
			'prettier/prettier': 'error',
		},
	},
]
