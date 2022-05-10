const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
  return src('lumos/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'));
}

function watchTask() {
  watch(['lumos/**/*.scss', '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
