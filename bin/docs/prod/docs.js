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

shell.exec(`node-sass ${sourceDocsDir} ${options.sass} ${minifiedDocsFile}`);
shell.exec(`documentjs -f`);

shell.exec('git checkout -B gh-pages');
shell.exec('git pull origin gh-pages --no-commit');

shell.cp('-f', './dist/gaiden.min.css', './gaiden.css');

let filesToFixPath = [];

shell.ls('-R', './docs/demo/').filter(function(file) {
  if (file.match(/(\.html$|\.js$)/)) {
    filesToFixPath.push(`./docs/demo/${file}`);
  }
});

shell.ls('-R', './docs/gaiden-css/').forEach(function(file) {
  if (file.match(/(\.html$|\.js$)/)) {
    filesToFixPath.push(`./docs/gaiden-css/${file}`);
  }
});

filesToFixPath.forEach(function(file) {
  shell.sed('-i', '\/docs\/demo\/', '\/gaiden\/demo', file);
  shell.sed('-i', '..\/..\/docs\/demo\/', '\/gaiden\/demo', file);
  shell.sed('-i', '\/gaiden-css\/gaiden.css', '\/gaiden\/gaiden.css', file);
});

shell.cp('-fr', `${docsDir}/`, './');

shell.cp('-Rf', './docs/demo/', './demo/');

const gaidenLastTag = shell.exec('git describe').stdout.replace(/\n/g, '');

shell.exec('git add . -A');
shell.exec(`git commit -m "${timestamp}: Updating docs ${gaidenLastTag}"`);
shell.exec('git push origin gh-pages --force');
shell.exec('git checkout -');
