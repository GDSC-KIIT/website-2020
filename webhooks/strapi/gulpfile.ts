import gulp from 'gulp';
import fs from 'fs';
import path from 'path';
import { spawn, execSync } from 'child_process';
import uglify from 'uglify-js';

function cleanDir() {
	fs.rmdirSync(dir, { recursive: true });
	return Promise.resolve();
}

function tsCompile() {
	execSync('npm run tsc', {
		cwd: process.cwd(),
		stdio: 'inherit',
	});
	return Promise.resolve();
}

const dir = './build';

function _getFileLocations() {
	const files = fs.readdirSync(dir);
	return files
		.filter((file) => path.extname(file) === '.js')
		.map((file) => path.join(dir, file))
		.map((filePath) => fs.readFileSync(filePath, 'utf-8'));
}

function minifyJS() {
	const options = {
		mangle: true,
		compress: {
			sequences: true,
			dead_code: true,
			conditionals: true,
			booleans: true,
			unused: true,
			if_return: true,
			join_vars: true,
			drop_console: true,
		},
	};
	const locs = _getFileLocations();
	const uglifed = uglify.minify(locs, options);
	fs.writeFileSync(dir + '/main.js', uglifed.code);
	return Promise.resolve();
}

export const build = gulp.series(cleanDir, tsCompile, minifyJS);

export async function tsDev() {
	execSync('pkill -9 node');
	spawn('npm', ['run', 'ts-node', 'src/index.ts'], {
		cwd: process.cwd(),
		detached: true,
		stdio: 'inherit',
	});
}

export function dev() {
	tsDev();
	gulp.watch('src/**/*.ts', () => {
		tsDev();
	});
}
