
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
  ui: false,
  files: "/docs",
  server: {
    baseDir: "docs",
    directory: true,
    routes: {
      "/gaiden.css": "./docs/gaiden-css/gaiden.css",
      "/base.css": "./docs/gaiden-css/base.css",
      "/docs/demo/gaiden-css/images/star-full.svg": "./docs/demo/gaiden-css/images/star-full.svg"
    }
  },
  port: 8000,
  open: false,
  cors: true,
  //middleware: function (req, res, next) {
    //console.log(req);

    //return next();
  //},
};
