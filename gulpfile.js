var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    minify    = require('gulp-clean-css'),
    uglify    = require('gulp-uglify'),
    beautify  = require('gulp-jsbeautifier'),
    replace   = require('gulp-replace'),
    rename    = require('gulp-ext-replace'),
    gulpif    = require('gulp-if'),
    exec      = require('child_process').exec,
    del       = require('del');

gulp.task('reset', function(){
  return del([
    'public/**/*',
    'themes/hugo-moodlebox-theme/static/css/**/*.min.css',
    'themes/hugo-moodlebox-theme/static/js/**/*.min.js'
  ]);
});

gulp.task('css', function(){
  return gulp.src(['./static/css/**/*.css', './themes/hugo-moodlebox-theme/static/css/**/*.css'])
    .pipe(gulpif(file => !(file.path.includes('.min.css')), rename('min.css')))
//     .pipe(concat('main.css'))
    .pipe(minify())
    .pipe(gulp.dest('themes/hugo-moodlebox-theme/static/css'))
});

gulp.task('js', function(){
  return gulp.src(['./static/js/**/*.js', './themes/hugo-moodlebox-theme/static/js/**/*.js'])
    .pipe(gulpif(file => !(file.path.includes('.min.js')), rename('min.js')))
//     .pipe(concat('main.css'))
    .pipe(uglify())
    .pipe(gulp.dest('themes/hugo-moodlebox-theme/static/js'))
});

gulp.task('hugo', gulp.series('reset', 'css', 'js', function (fetch) {
  return exec('hugo', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    fetch(err);
  });
}));

gulp.task('html', function() {
  return gulp.src(['public/**/*.html', 'public/**/*.xml'])
    .pipe(beautify({indent_char: ' ', indent_size: 2}))
    .pipe(replace(/^\s*\r?\n/gm, ''))
    .pipe(gulp.dest('public'))
});

gulp.task('clean', function () {
  return del([
    'themes/hugo-moodlebox-theme/static/css/**/*.min.css',
    'themes/hugo-moodlebox-theme/static/js/**/*.min.js'
  ]);
});

gulp.task('default', gulp.series( 'hugo', 'html', 'clean' ));
