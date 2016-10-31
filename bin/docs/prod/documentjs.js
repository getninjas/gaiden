#! /usr/bin/env node

const shelljs = require('shelljs');

const docsDir = './docs/gaiden-css';
const sourceDir = './docs/demo/gaiden-css';
const minifiedDocsFile = `${docsDir}/ninja-demo.css`;

const options = {
  sass: ` --include-path ${sourceDir} \
    --output-style compressed \
    -o ${docsDir}`
}

shelljs.exec(`node-sass ${options.sass} ${docsDir} ${minifiedDocsFile}`);
shelljs.exec(`documentjs`);
