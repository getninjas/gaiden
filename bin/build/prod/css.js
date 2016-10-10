#! /usr/bin/env node

const shelljs = require('shelljs');

const sourceDir = "./src/sass/";
const outputDir = "./dist/";
const compiledFile = `${outputDir}/ninja-gaiden.css`;
const browserSupport = "> 0.1% in BR, not ie 8";
const minifiedFile = `${outputDir}/ninja-gaiden.min.css`;

const options = {
  sass: ` --include-path ${sourceDir} \
    --source-map true -r \
    --output-style compressed \
    -o ${outputDir}`,
  cssnano: `--replace true \
    --autoprefixer.browsers "${browserSupport}" \
    --safe \
    --sourcemap`,
  mqpacker: `-s`
}

shelljs.exec(`node-sass ${options.sass} ${sourceDir} ${compiledFile}`);
shelljs.exec(`mqpacker ${options.mqpacker} ${compiledFile} ${compiledFile}`);
shelljs.exec(`cssnano ${options.cssnano} ${compiledFile} ${minifiedFile}`);
shelljs.exec(`rm ${compiledFile} ${compiledFile}.map`);
