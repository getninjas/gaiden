#! /usr/bin/env node

const sh = require('shelljs');

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

sh.exec(`node-sass ${sourceDocsDir} ${options.sass} ${minifiedDocsFile}`);
sh.exec(`documentjs`);
sh.cp('./build/stylesheets/gaiden.css', `${docsDir}/`)
