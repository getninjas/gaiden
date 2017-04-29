#! /usr/bin/env node

const shell = require('shelljs');

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

shell.exec('git checkout -B gh-pages');
shell.exec('git pull origin gh-pages --no-commit');

shell.exec(`node-sass ${sourceDocsDir} ${options.sass} ${minifiedDocsFile}`);
shell.exec(`documentjs`);

shell.cp('./dist/gaiden.min.css', './');

shell.cp('-R', `${docsDir}/`, './');

shell.ls('./docs/demo/*.html').forEach(function(file) {
  shell.sed('-i', 'docs\/demo\/', 'demo', file);
  shell.sed('-i', '\/gaiden-css\/gaiden.css', '\/gaiden.css', file);
});

shell.mkdir('./demo');
shell.cp('-R', './docs/demo/*', './demo/');

shell.exec('$GAIDEN_LAST_TAG=$(git describe)')
shell.exec('git add .');
shell.exec(`git commit -m '${timestamp}: Updating docs $GAIDEN_LAST_TAG'`);
shell.exec('git push origin gh-pages');
shell.exec('git checkout -');
