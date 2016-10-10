#! /usr/bin/env node

const shelljs = require('shelljs');

const sourceDir = "./src/sass/";
const outputDir = "./dist/stylesheets";
const minifiedFile = `${outputDir}/ninja-gaiden.min.css`;

const options = {
  sass: ` --include-path ${sourceDir} \
    --output-style expanded \
    --sourceComments true \
    -o ./dist/stylesheets`
}

shelljs.exec(`node-sass ${options.sass} ${sourceDir} ${minifiedFile}`);
