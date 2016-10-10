#! /usr/bin/env node

const shelljs = require('shelljs');

const sourceDir = "./src/sass/";
const outputDir = "./build/stylesheets";
const minifiedFile = `${outputDir}/ninja-gaiden.min.css`;

const options = {
  sass: ` --include-path ${sourceDir} \
    --output-style expanded \
    --sourceComments true \
    -o ${outputDir}`,
  sasslint: `-c ./sass-lint.yml \
    src/sass/**/*.scss -v -q`
}

const sassLintExec = shelljs.exec(`sass-lint ${options.sasslint}`);

if (sassLintExec.code !== 0) {
  return shelljs.error(sassLintExec.stderr);
}

shelljs.echo('SassLint ok!');

shelljs.exec(`node-sass ${options.sass} ${sourceDir} ${minifiedFile}`);
