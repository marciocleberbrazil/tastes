var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
 
gulp.task('css', function () {
  return gulp.src('{pages,assets}/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat("css/main.css"))
    .pipe(minify())
    .pipe(gulp.dest('assets/'));
});

gulp.task('js', function () {
    return gulp.src('assets/js/src/**/*.js')
        .pipe(concat("js/main.js"))
        .pipe(uglify())
        .pipe(gulp.dest('assets/'));
    });

gulp.task('watch', function(){
    gulp.watch('{pages,assets}/**/*.scss', ['css']);
    gulp.watch('assets/**/*.js', ['js']);
});