#! /usr/bin/env node

const sh = require('shelljs');

const validFile = (files, file) => {
  if (sh.test('-d', file)) return;

  if (file.match(/(html$|js$|css$)/)) {
    files.push(file);
  }

  return files;
}

class DocsGenerator {
  constructor(
    docsDir = './docs/gaiden-css',
    sassSourceDocsDir = './docs/demo/gaiden-css/scss',
    sourceDir = './src/scss',
    minifiedDocsFile = './docs/gaiden-css/ninja-demo.css'
  ) {

    this.options = {
      sassSourceDocsDir: sassSourceDocsDir,
      sourceDir: sourceDir,
      docsDir: docsDir,
      minifiedDocsFile: minifiedDocsFile,
      timestamp: new Date().getTime(),
      sass: ` --include-path ${sassSourceDocsDir} \
        --include-path ${sourceDir} \
        --output-style expanded \
        --sourceComments true \
        -o ${docsDir} \
        --recursive `
    }
  }

  start() {
    this.generateDocs();
    this.checkoutGh();
    this.setupFileNames();
    this.changePathNames();
    this.pushDocs();
  }

  generateDocs() {
    sh.exec(`documentjs -f gh_pages`);
    sh.exec(`node-sass ${this.options.sourceDocsDir} ${this.options.sass} ${this.options.minifiedDocsFile}`);
  }

  checkoutGh() {
    sh.exec('git checkout -B gh-pages');
    sh.exec('git pull origin gh-pages --no-commit');
  }

  setupFileNames() {
    sh.cp('-f', './dist/gaiden.min.css', './gaiden.css');
  }

  changePathNames() {
    sh.sed('-i', '/gaiden-css/gaiden.css', 'gaiden.css', './*.html');
  }

  pushDocs() {
    const gaidenLastTag = sh.exec('git describe').stdout.replace(/\n/g, '');

    sh.exec('git add . -A');
    sh.exec(`git commit -m "${this.options.timestamp}: Updating docs ${gaidenLastTag}"`);
    sh.exec('git push origin gh-pages --force');
    sh.exec('git checkout -');
  }
}

docsGenerator = new DocsGenerator();
docsGenerator.start();
