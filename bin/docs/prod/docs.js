#! /usr/bin/env node

const sh = require('shelljs');
const FileReplacePath = require('./file-replace-path');
const DocsGenerator = require('./docs-generator');

const docsGenerator = new DocsGenerator();
docsGenerator.run();
