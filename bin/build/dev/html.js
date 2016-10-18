#! /usr/bin/env node

const shelljs = require('shelljs');

const sourceDir = "./src/html/";
const outputDir = "./build/";

shelljs.exec(`rsync -av ${sourceDir}*.html ${outputDir}`);
