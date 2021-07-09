import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	testMatch: ['**/__tests__/**/*.[jt]s?(x)', '<rootDir>/tests/**/?(*.)+(spec|test).[jt]s?(x)'],
	setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
	errorOnDeprecated: true,
	testTimeout: 10000,
	verbose: false,
	collectCoverage: true,
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
	},
	testEnvironment: 'jsdom',
};

export default config;
