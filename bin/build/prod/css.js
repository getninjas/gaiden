#! /usr/bin/env node

const shelljs = require('shelljs');

const sourceDir = "./src/scss";
const outputDir = "./dist";
const compiledFile = `${outputDir}/gaiden.css`;
const minifiedFile = `${outputDir}/gaiden.min.css`;

const options = {
  sass: ` --include-path ${sourceDir} \
    --output-style compressed \
    -o ${outputDir}`,
  cssnano: `--replace true \
    --no-autoprefixer \
    --safe \
    --sourcemap false`,
  mqpacker: `-s`,
  postcss: `--use autoprefixer ${compiledFile} -o ${minifiedFile}`,
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
shelljs.exec(`postcss ${options.postcss}`);
shelljs.rm(`${compiledFile}`, `${compiledFile}.map`);
