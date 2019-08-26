#! /usr/bin/env node

const shelljs = require('shelljs');

const sourceDir = './src/html/';
const outputDir = './dist/';

shelljs.exec(`rsync -av ${sourceDir}*.html ${outputDir}`);
