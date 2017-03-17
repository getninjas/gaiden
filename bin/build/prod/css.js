#! /usr/bin/env node

const shelljs = require('shelljs');

const sourceDir = "./src/scss";
const outputDir = "./dist";
const compiledFile = `${outputDir}/gaiden.css`;
const browserSupport = "> 0.1% in BR, not ie 8";
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
  postcss: `autoprefixer -c postcss.json -o ${minifiedFile} ${compiledFile}`,
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
