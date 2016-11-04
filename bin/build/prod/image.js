#! /usr/bin/env node

const shelljs = require('shelljs');

const sourceDir = "./src/images";
const outputDir = "./dist/images";

shelljs.exec(`rsync -av ${sourceDir}/* ${outputDir}`);
