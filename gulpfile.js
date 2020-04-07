var gulp = require('gulp')
// var concat = require('gulp-concat')
var minify = require('gulp-clean-css')
var uglify = require('gulp-uglify')
var beautify = require('gulp-jsbeautifier')
var replace = require('gulp-replace')
var rename = require('gulp-ext-replace')
var gulpif = require('gulp-if')
var exec = require('child_process').exec
var del = require('del')
var purgecss = require('gulp-purgecss')

gulp.task('reset', function () {
  return del([
    'public',
    //'static/css/**/*.min.css',
    'static/js/**/*.min.js'
  ])
})

// gulp.task('css', function () {
//   return gulp.src(['themes/hugo-moodlebox-theme/static/css/**/*.css', 'static/css/**/*.css'])
//     .pipe(gulpif(file => !(file.path.includes('.min.css')), rename('min.css')))
//     // .pipe(concat('main.css'))
//     .pipe(minify())
//     .pipe(gulp.dest('static/css'))
// })

gulp.task('css', () => {
  return gulp
    .src('public/**/*.css')
    .pipe(purgecss({content: ['public/**/*.html']}))
    .pipe(gulp.dest('public'))
})

gulp.task('js', function () {
  return gulp.src(['themes/hugo-moodlebox-theme/static/js/**/*.js', 'static/js/**/*.js'])
    .pipe(gulpif(file => !(file.path.includes('.min.js')), rename('min.js')))
    // .pipe(concat('main.css'))
    .pipe(uglify())
    .pipe(gulp.dest('static/js'))
})

gulp.task('hugo', gulp.series('reset', 'js', function (fetch) {
  return exec('hugo', function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    fetch(err)
  })
}))

gulp.task('html', function () {
  return gulp.src(['public/**/*.html', 'public/**/*.xml'])
    .pipe(beautify({indent_char: ' ', indent_size: 2}))
    .pipe(replace(/^\s*\r?\n/gm, ''))
    .pipe(gulp.dest('public'))
})

gulp.task('clean', function () {
  return del([
    // 'static/css/**/*.min.css',
    'static/js/**/*.min.js'
  ])
})

gulp.task('default', gulp.series('hugo', 'html', 'clean'))
