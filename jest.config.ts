import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	errorOnDeprecated: true,
	testMatch: ['**/__tests__/**/*.[jt]s?(x)', '<rootDir>/tests/**/?(*.)+(spec|test).[jt]s?(x)'],
	setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
	testTimeout: 7000,
	verbose: false,
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
};

export default config;
