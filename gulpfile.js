'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minifyjs = require('gulp-js-minify');
var concat = require("gulp-concat");
 
gulp.task('sass', function () {
  return gulp.src('build/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('styles/css'));
});

gulp.task('minify-js', function(){
  gulp.src('app/lib/js/*.js')
      .pipe(minifyjs())
      .pipe(gulp.dest('app/lib/js'));
});

gulp.task("concat-js", function () {
    return gulp.src('build/js/**/*.js')
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('app/lib/js'));
});
 
gulp.task('sass:watch', function () {
    gulp.watch('build/sass/**/*.scss', ['sass']);

    gulp.watch('build/js/**/*.js', ['concat-js']);

    gulp.watch('app/lib/js/*.js', ['minify-js']);
});