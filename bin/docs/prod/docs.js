#! /usr/bin/env node

const shelljs = require('shelljs');

const docsDir = './docs/gaiden-css';
const sourceDocsDir = './docs/demo/gaiden-css/scss';
const sourceDir = './src/scss';
const minifiedDocsFile = `${docsDir}/ninja-demo.css`;

const timestamp = new Date().getTime();

const options = {
  sass: ` --include-path ${sourceDocsDir} \
    --include-path ${sourceDir} \
    --output-style expanded \
    --sourceComments true \
    -o ${docsDir} \
    --recursive `
}

shelljs.exec('git checkout -B gh-pages');
shelljs.exec('git pull origin gh-pages');

shelljs.exec(`node-sass ${sourceDocsDir} ${options.sass} ${minifiedDocsFile}`);
shelljs.exec(`documentjs`);

shelljs.cp([
  './dist/gaiden.min.css.map',
  './dist/gaiden.min.css',
], './');

shelljs.mv('-n', [
  `${docsDir}/static`,
  `${docsDir}/*.css`,
  `${docsDir}/*.html`,
], './');

shelljs.mkdir('./demo');
shelljs.mv('-n', './docs/demo/*', './demo/');

shelljs.exec('$GAIDEN_LAST_TAG=$(git describe)')
shelljs.exec('git add .');
shelljs.exec(`git commit -m '${timestamp}: Updating docs $GAIDEN_LAST_TAG'`);
shelljs.exec('git push origin gh-pages');
shelljs.exec('git checkout -');
