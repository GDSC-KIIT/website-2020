import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	testMatch: ['**/__tests__/**/*.[jt]s?(x)', '<rootDir>/tests/**/?(*.)+(spec|test).[jt]s?(x)'],
	setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
	errorOnDeprecated: true,
	testTimeout: 7000,
	verbose: false,
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
};

export default config;
