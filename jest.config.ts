import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
	dir: './',
})

const config: Config = {
	bail: 3,
	clearMocks: true,
	globals: {},
	collectCoverage: true,
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{js,jsx,ts,tsx}',
		'!**/node_modules/**',
		'!**/vendor/**',
	],
	coveragePathIgnorePatterns: [
		'<rootDir>/src/app/',
		'<rootDir>/src/configs/',
		'<rootDir>/src/types/',
		'<rootDir>/src/shared/constants/',
		'<rootDir>/src/ui/fonts/',
		'<rootDir>/src/ui/icons/',
		'<rootDir>/src/ui/animations/',
	],
	coverageDirectory: '<rootDir>/coverage',
	coverageProvider: 'v8',
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: -10,
		},
	},
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'@/(.*)$': '<rootDir>/src/$1',
		'@/public/(.*)$': '<rootDir>/public/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
