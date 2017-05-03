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
    this.docFiles = [];
    this.demoFiles = [];

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
    this.setupFiles();
    this.changePathNames();
    this.fixStaticFiles();
    this.pushDocs();
  }

  generateDocs() {
    sh.exec(`documentjs -f`);
    sh.exec(`node-sass ${this.options.sourceDocsDir} ${this.options.sass} ${this.options.minifiedDocsFile}`);
  }

  checkoutGh() {
    sh.exec('git checkout -B gh-pages');
    sh.exec('git pull origin gh-pages --no-commit');
  }

  setupFiles() {
    sh.cp('-f', './dist/gaiden.min.css', './gaiden.css');

    sh.find('./docs/demo/').forEach(function(file) {
      validFile(this.demoFiles, file);
    }.bind(this));

    sh.find(`${this.options.docsDir}`).forEach(function(file) {
      if (file.match(/(steal|html5shiv)/g)) return;

      validFile(this.docFiles, file);
    }.bind(this));
  }

  changePathNames() {
    sh.sed('-i', '/gaiden-css/gaiden.css', '/gaiden/gaiden.css', this.demoFiles);

    sh.sed('-i', '/demo/gaiden-css/', '/gaiden/demo/gaiden-css/', this.docFiles);
    sh.sed('-i', '/docs/', '/', this.docFiles);
    sh.sed('-i', '../docs/demo/', '/gaiden/demo/', this.docFiles);

    if (sh.test('-e', './demo/')) {
      sh.rm('-rf', './demo/*');
    } else {
      sh.mkdir('./demo/');
    }

    sh.rm('-f', './*.html');

    sh.mv('-f', this.docFiles, './');
    sh.mv('-f', this.demoFiles, './demo/');
  }

  fixStaticFiles() {
    if (!sh.test('-e', './static')) {
      sh.mkdir('./static');
    }

    sh.mv('-f', `${this.options.docsDir}/static/html5shiv.js`, './static/');
    sh.mv('-f', `${this.options.docsDir}/static/steal.production.js`, './static/');
    sh.mv('-f', `${this.options.docsDir}/static/bundles`, './static/');
    sh.mv('-f', `${this.options.docsDir}/static/fonts`, './static/');
    sh.mv('-f', `${this.options.docsDir}/static/img`, './static/');
    sh.mv('-f', `${this.options.docsDir}/static/templates`, './static/');
  }

  pushDocs() {
    const gaidenLastTag = sh.exec('git describe').stdout.replace(/\n/g, '');

    sh.exec('git add . -A');
    sh.exec(`git commit -m "${this.options.timestamp}: Updating docs ${gaidenLastTag}"`);
    sh.exec('git push origin gh-pages --force');
    sh.exec('git checkout -');
  }
}

const docsGenerator = new DocsGenerator();
docsGenerator.start();

