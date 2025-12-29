const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const htmlbeautify = require('gulp-html-beautify');

/* PATHS */
const paths = {
  pages: 'src/pages/**/*.html',
  components: 'src/components/**/*.html',
  scss: 'src/scss/**/*.scss',
  scssEntry: 'src/scss/main.scss',
  dist: 'dist'
};

/* TASKS */
function cleanDist() {
  return src(paths.dist, { allowEmpty: true, read: false }).pipe(clean());
}

function html() {
  return src(paths.pages, { allowEmpty: true })
    .pipe(fileInclude({ prefix: '@@', basepath: 'src/components/' }))
    .pipe(htmlbeautify({
      indent_size: 2,
      indent_with_tabs: false,
      end_with_newline: true,
      preserve_newlines: true
    }))
    .pipe(dest(paths.dist))
    .pipe(browserSync.stream());
}

function styles() {
  return src(paths.scssEntry)
    .pipe(sass())
    .pipe(dest(paths.dist + '/css'))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({ server: { baseDir: paths.dist } });

  watch(
    [paths.pages, paths.components],
    { ignoreInitial: false, usePolling: true, interval: 500 },
    html
  );
  watch(paths.scss, { ignoreInitial: false, usePolling: true, interval: 500 }, styles);
}

/* EXPORT */
exports.default = series(cleanDist, html, styles, serve);
