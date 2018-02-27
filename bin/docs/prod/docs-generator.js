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
    this.checkoutGh();
    this.removeFileDocs();
    this.generateDocs();
    this.fixPaths();
    this.pushDocs();
  }

  checkoutGh() {
    sh.exec('COMMIT_DATE=$(date)');
    sh.exec('git commit -am "Dist commit preversion: "$COMMIT_DATE');
    sh.exec('git branch -D gh-pages')
    sh.exec('git checkout -B gh-pages');
    sh.exec('git fetch origin gh-pages');
    sh.exec('git rebase origin/gh-pages');
    sh.exec('git merge --no-commit -s ours master');
    sh.exec('git commit -m "Preversion from master: "$COMMIT_DATE');
  }

  removeFileDocs() {
    sh.rm('./*.html');
    sh.exec('rm -rf ./static');
  }

  generateDocs() {
    sh.exec(`documentjs -f gh_pages`);
    sh.exec(`node-sass ${this.options.sassSourceDocsDir} ${this.options.sass}`);
  }

  fixPaths() {
    let demoFiles = [];

    sh.cp('-f', './dist/gaiden.min.css', './gaiden.css');

    this.replace.run('\/gaiden-css\/gaiden\.css', '\/gaiden.css', './docs/demo/');
    this.replace.run('\/gaiden-css\/base\.css', '\/base.css', './docs/demo/');
    this.replace.run('(\/docs\/demo\/gaiden-css\/)|(\/demo\/gaiden-css\/)|(demo\/gaiden-css\/)', '\/gaiden\/docs\/demo\/gaiden-css\/');
    this.replace.run('(\=\"\/)+([a-zA-Z]{1,}.css)', '$1gaiden\/$2');
  }

  pushDocs() {
    const gaidenLastTag = sh.exec('git describe').stdout.replace(/\n/g, '');

    sh.exec('git add . -A');
    sh.exec(`git commit -m "${this.options.timestamp}: Updating docs ${gaidenLastTag}"`);
    sh.exec('git push origin gh-pages --force');
    sh.exec('git checkout -');
  }
}

module.exports = DocsGenerator;
