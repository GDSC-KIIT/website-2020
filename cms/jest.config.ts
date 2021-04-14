import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	testMatch: ['**/__tests__/**/*.ts', '<rootDir>/tests/**/?(*.)+(spec|test).ts'],
	// setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
	transform: {
		'^.+\\.(ts)$': 'ts-jest',
	},
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
		},
	},
	errorOnDeprecated: true,
	testTimeout: 5000,
	verbose: false,
	collectCoverage: true,
	collectCoverageFrom: ['api/**/*.{js,ts}', 'config/**/*.{js,ts}'],
};

export default config;
