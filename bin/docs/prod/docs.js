#! /usr/bin/env node

const sh = require('shelljs');
const FileReplacePath = require('./file-replace-path');

class DocsGenerator {
  constructor(
    docsDir = './docs/gaiden-css',
    sassSourceDocsDir = './docs/demo/gaiden-css/scss',
    sourceDir = './src/scss',
    minifiedDocsFile = './'
  ) {

    this.options = {
      docsDir: docsDir,
      timestamp: new Date().getTime(),
      sassSourceDocsDir: sassSourceDocsDir,
      sass: ` --include-path ${sassSourceDocsDir} \
        --include-path ${sourceDir} \
        --sourceComments true \
        -o ${minifiedDocsFile} \
        --recursive `
    }

    this.replace = new FileReplacePath({exclude: 'node_modules,bin,src,dist'});
  }

  run() {
    this.removeFileDocs();
    this.generateDocs();
    this.checkoutGh();
    this.fixPaths();
    this.pushDocs();
  }

  removeFileDocs() {
    sh.rm('./*.html');
    sh.exec('rm -rf ./static');

    //this.replace.run('(\/docs\/demo\/gaiden-css\/)', '\/demo\/gaiden-css\/');
    this.replace.run('(\/docs\/demo\/gaiden-css\/)', '/gaiden\/docs\/demo\/gaiden-css\/');
  }

  generateDocs() {
    sh.exec(`documentjs -f gh_pages`);
    sh.exec(`node-sass ${this.options.sassSourceDocsDir} ${this.options.sass}`);
  }

  checkoutGh() {
    sh.exec('git checkout -B gh-pages');
    sh.exec('git pull origin gh-pages --no-commit');
  }

  fixPaths() {
    let demoFiles = [];

    sh.cp('-f', './dist/gaiden.min.css', './gaiden.css');

    this.replace.run('\/gaiden-css\/gaiden\.css', '\/gaiden.css', './docs/demo/');
    this.replace.run('\/gaiden-css\/base\.css', '\/base.css', './docs/demo/');
    this.replace.run('(\/demo\/gaiden-css\/)|(demo\/gaiden-css\/)', '\/docs\/demo\/gaiden-css\/');
    this.replace.run('(\.\/docs\/docs)', 'docs');

    sh.sed('-i', '/gaiden-css/gaiden.css', '/gaiden.css', './*.html');
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
docsGenerator.run();
