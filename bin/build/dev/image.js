#! /usr/bin/env node

const shelljs = require('shelljs');

const sourceDir = "./src/images";
const outputDir = "./build/images";

shelljs.exec(`rsync -av ${sourceDir}/* ${outputDir}`);
