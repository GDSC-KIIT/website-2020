import gulp from 'gulp';
import fs from 'fs';
import path from 'path';
import { spawn, execSync } from 'child_process';
import uglify from 'uglify-js';

export function tsCompile() {
	execSync('npm run tsc', {
		cwd: process.cwd(),
		stdio: 'inherit',
	});
}

const dir = './build';

function cleanDir() {
	fs.rmdirSync(dir, { recursive: true });
}

function _getFileLocations() {
	const files = fs.readdirSync(dir);
	return files
		.filter((file) => path.extname(file) === '.js')
		.map((file) => path.join(dir, file))
		.map((filePath) => fs.readFileSync(filePath, 'utf-8'));
}

function minifyJS() {
	var options = {
		mangle: {
			properties: true,
		},
	};
	const locs = _getFileLocations();
	const uglifed = uglify.minify(locs, options);
	fs.writeFileSync(dir + '/main.js', uglifed.code);
}

export function build() {
	cleanDir();
	tsCompile();
	minifyJS();
	return Promise.resolve();
}

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
