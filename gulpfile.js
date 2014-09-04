var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var less = require('gulp-less');
var uglify = require('gulp-uglify');

gulp.task('img', function() {
  gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
  gulp.src('./src/img/light_toast/*')
    .pipe(gulp.dest('./dist/img/light_toast'));

  gulp.src('./src/img/services/*')
    .pipe(imageResize({
        width : 738,
        upscale : false
      }))
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/services'));

  gulp.src('./src/img/work/*')
    .pipe(imageResize({
        width : 738,
        upscale : false
      }))
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/work'));
});

gulp.task('fonts', function() {
  return gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('styles', function() {
  return gulp.src('./src/less/index.less')
    .pipe(less())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('script', function() {
  return gulp.src([
      './bower_components/jquery/dist/jquery.js',
      './bower_components/bootstrap/js/transition.js',
      './bower_components/bootstrap/js/carousel.js',
      './bower_components/bootstrap/js/collapse.js',
      './bower_components/bootstrap/js/scrollspy.js',
      './src/js/script.js'
    ])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('styles-min', ['styles'], function() {
  return gulp.src('./dist/styles.css')
    .pipe(cssmin({ keepSpecialComments:0, processImport: false }))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('script-min', ['script'], function() {
  return gulp.src('./dist/script.js')
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['styles-min', 'script-min']);
