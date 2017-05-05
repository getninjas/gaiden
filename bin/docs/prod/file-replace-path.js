const replace = require('replace');

const defaultOptions = {
  exclude: 'node_modules',
  recursive: true,
  paths: './',
  silent: true
};

class FileReplacePath {
  constructor(params) {
    const options = Object.assign(defaultOptions, params);

    this.exclude = options.exclude;
    this.recursive = options.recursive;
    this.paths = options.paths;
    this.silent = options.silent;
  }

  run(regex, replaceRegex, paths) {
    replace({
      regex: regex,
      replacement: replaceRegex,
      paths: [ paths || this.paths ],
      recursive: this.recursive,
      exclude: this.exclude,
      silent: this.silent
    });
  }
}

module.exports = FileReplacePath;
