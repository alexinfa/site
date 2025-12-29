const { src, dest, watch, series, parallel } = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const htmlbeautify = require('gulp-html-beautify');

// PATHS
const paths = {
  pages: 'src/pages/**/*.njk',
  templates: 'src/templates/',
  scss: 'src/scss/**/*.scss',
  scssEntry: 'src/scss/main.scss',
  js: 'src/js/**/*.js',
  images: 'src/images/**/*',
  dist: 'dist'
};

// Pulisce dist
function cleanDist() {
  return src(paths.dist, { allowEmpty: true, read: false }).pipe(clean());
}

// Compila Nunjucks
function html() {
  return src('src/pages/**/*.njk')
    .pipe(nunjucksRender({
      path: ['src/templates', 'src/components']  // ← Nunjucks sa dove cercare
    }))
    .pipe(htmlbeautify({ indent_size: 2 }))
    .pipe(dest(paths.dist))
    .pipe(browserSync.stream());
}

// SCSS
function styles() {
  return src(paths.scssEntry)
    .pipe(sass())
    .pipe(dest(paths.dist + '/css'))
    .pipe(browserSync.stream());
}

// JS
function scripts() {
  return src(paths.js)
    .pipe(dest(paths.dist + '/js'))
    .pipe(browserSync.stream());
}

// Immagini
function images() {
  return src(paths.images)
    .pipe(dest(paths.dist + '/images'))
    .pipe(browserSync.stream());
}

// Server + Watch
function serve() {
  browserSync.init({ server: { baseDir: paths.dist } });

  watch(paths.scss, styles);
  watch(paths.js, scripts);
  watch(paths.images, images);
  watch([paths.pages, paths.templates + '**/*.njk'], html);
}

// Export default
exports.default = series(
  cleanDist,
  parallel(html, styles, scripts, images),
  serve
);