#! /usr/bin/env node

const shelljs = require('shelljs');
const process = require('process');
const fs = require('fs');

const sourceDir = './src/scss';
const outputDir = './build/stylesheets';

const execBuild = (theme) => {
  const filename = theme !== 'default' ? `gaiden.${theme}.css` : 'gaiden.css';
  const minifiedFile = `${outputDir}/${filename}`;

  const options = {
    sass: `${sourceDir}/${theme}/gaiden.scss ${outputDir}/${filename} --source-map true -r --output-style expanded --sourceComments true `,
    postcss: `--use autoprefixer ${minifiedFile} -o ${minifiedFile}`,
    sasslint: '-c .sass-lint.yml  -v -q',
  };

  const sassLintExec = shelljs.exec(`sass-lint ${options.sasslint}`);

  if (sassLintExec.code !== 0) {
    return shelljs.error(sassLintExec.stderr);
  }

  shelljs.echo('SassLint ok!');
  shelljs.exec(`node-sass ${options.sass}`);
  shelljs.exec(`postcss ${options.postcss}`);
  return shelljs.echo('Build finished with success!');
};

const prepareBuildForAllThemes = () => {
  const themes = fs.readdirSync(sourceDir);

  themes.splice(themes.indexOf('shared'), 1);

  themes.forEach(theme => execBuild(theme));
};

const init = () => {
  const themeName = process.argv[2];

  if (!themeName) {
    return prepareBuildForAllThemes();
  }

  return execBuild(themeName);
}

init();
