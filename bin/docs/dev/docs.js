#! /usr/bin/env node

const shell = require('shelljs');

const docsDir = './docs/gaiden-css';
const sourceDocsDir = './docs/demo/gaiden-css/scss';
const sourceDir = './src/scss';
const minifiedDocsFile = `${docsDir}/ninja-demo.css`;

const options = {
  sass: ` --include-path ${sourceDocsDir} \
    --include-path ${sourceDir} \
    --output-style expanded \
    --sourceComments true \
    -o ${docsDir} \
    --recursive `
}

shell.exec(`node-sass ${sourceDocsDir} ${options.sass} ${minifiedDocsFile}`);
shell.exec(`documentjs`);
shell.cp('./build/stylesheets/gaiden.css', `${docsDir}/`)
