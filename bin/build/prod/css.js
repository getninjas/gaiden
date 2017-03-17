#! /usr/bin/env node

const shelljs = require('shelljs');

const sourceDir = "./src/scss";
const outputDir = "./dist";
const compiledFile = `${outputDir}/gaiden.css`;
const browserSupport = "last 2 versions, safari >= 8, ie >= 9, ios >=8, android >=4";
const minifiedFile = `${outputDir}/gaiden.min.css`;

const options = {
  sass: ` --include-path ${sourceDir} \
    --source-map true -r \
    --output-style compressed \
    -o ${outputDir}`,
  cssnano: `--replace true \
    --no-autoprefixer \
    --safe \
    --sourcemap`,
  mqpacker: `-s`,
  sasslint: `-c ./sass-lint.yml -v`
}

const sassLintExec = shelljs.exec(`sass-lint ${options.sasslint}`);

if (sassLintExec.code !== 0) {
  return shelljs.error(sassLintExec.stderr);
}

shelljs.echo('SassLint ok!');

shelljs.exec(`node-sass ${options.sass} ${sourceDir} ${compiledFile}`);
shelljs.exec(`mqpacker ${options.mqpacker} ${compiledFile} ${compiledFile}`);
shelljs.exec(`cssnano ${options.cssnano} ${compiledFile} ${minifiedFile}`);
shelljs.rm(`${compiledFile}`, `${compiledFile}.map`);
