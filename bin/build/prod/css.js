#! /usr/bin/env node

const shelljs = require('shelljs');
const process = require('process');
const fs = require('fs');

const sourceDir = './src/scss';
const outputDir = './dist';

const init = () => {
  const themeName = process.argv[2];

  if (!themeName) {
    return prepareBuildForAllThemes();
  }

  execBuild(themeName);
}

const prepareBuildForAllThemes = () => {
  const themes = fs.readdirSync(sourceDir);

  themes.forEach((theme) => execBuild(theme));
};

const execBuild = (theme) => {
  const filename = theme !== 'default' ? `gaiden.${theme}.min.css` : 'gaiden.min.css';
  const minifiedFile = `${outputDir}/${filename}`;
  const compiledFile = `${outputDir}/gaiden.${theme}.css`;

  const options = {
    sass: `${sourceDir}/${theme}/gaiden.scss ${compiledFile} \
    --source-map true -r \
    --output-style compressed \
    --sourceComments true \
    `,
    cssnano: `--replace true \
    --no-autoprefixer \
    --safe \
    --sourcemap false`,
    mqpacker: `-s`,
    postcss: `--use autoprefixer ${compiledFile} -o ${minifiedFile}`,
    sasslint: `-c .sass-lint.yml  -v -q`
  };

  const sassLintExec = shelljs.exec(`sass-lint ${options.sasslint}`);

  if (sassLintExec.code !== 0) {
    return shelljs.error(sassLintExec.stderr);
  }

  shelljs.exec(`node-sass ${options.sass}`);
  shelljs.exec(`mqpacker ${options.mqpacker} ${compiledFile} ${compiledFile}`);
  shelljs.exec(`postcss ${options.postcss}`);
  shelljs.exec(`cssnano ${options.cssnano} ${compiledFile} ${minifiedFile}`);
  shelljs.rm(`${compiledFile}`, `${compiledFile}.map`);
};

init();
