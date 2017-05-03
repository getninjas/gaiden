#! /usr/bin/env node

const shelljs = require('shelljs');

const sourceDir = './src/scss';
const outputDir = './build/stylesheets';
const minifiedFile = `${outputDir}/gaiden.min.css`;
const docsCss = `docs/gaiden/gaiden.css`;
const docsCssPrefixed = `docs/gaiden/gaiden.css`;

const options = {
  sass: ` --include-path ${sourceDir} \
    --source-map true -r \
    --output-style expanded \
    --sourceComments true \
    -o ${outputDir}`,
  postcss: `--use autoprefixer -o ${docsCss} ${docsCssPrefixed}`,
  sasslint: `-c ./sass-lint.yml  -v -q`
}

const sassLintExec = shelljs.exec(`sass-lint ${options.sasslint}`);

if (sassLintExec.code !== 0) {
  return shelljs.error(sassLintExec.stderr);
}

shelljs.echo('SassLint ok!');
shelljs.exec(`postcss ${options.postcss}`);
shelljs.exec(`node-sass ${options.sass} ${sourceDir} ${minifiedFile}`);
