var gulp      = require('gulp');
var connect   = require('gulp-connect');

gulp.task('default', ['connect', 'build', 'watch']);


gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true,
    port: 8080
  });
});

gulp.task('watch', function() {
    return gulp.watch('src/**/*', ['build']);
});

gulp.task('html', function() {
  return gulp.src('src/*.html')
  .pipe(gulp.dest('build'))
  .pipe(connect.reload());
});

gulp.task('css', function() {
  return gulp.src('src/css/*.css')
  .pipe(gulp.dest('build/css'))
  .pipe(connect.reload());
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
  .pipe(gulp.dest('build/js'))
  .pipe(connect.reload());
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/*')
  .pipe(gulp.dest('build/fonts'))
  .pipe(connect.reload());
});

gulp.task('img', function() {
  return gulp.src('src/img/*')
  .pipe(gulp.dest('build/img'))
  .pipe(connect.reload());
});


gulp.task('build', ['html', 'css', 'js', 'fonts', 'img']);