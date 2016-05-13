var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var filter = require('gulp-filter');

gulp.task('browserify', function() {
  browserify('./app/js/views/app.js', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('sass',function() {
  gulp.src('./app/sass/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(filter('**/*.css'))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('html',function() {
  gulp.src('./app/*.html')
    .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function() {
  gulp.watch('./app/js/**/*.js', ['browserify'])
  gulp.watch('./app/sass/**/*.scss',['sass'])
  gulp.watch('./app/*.html',['html'])
});

gulp.task('webserver', function() {
  gulp.src('./dist/')
    .pipe(webserver({
      host: '127.0.0.1',
      livereload: true
    })
  );
});

gulp.task('default', ['browserify', 'watch', 'webserver']);
