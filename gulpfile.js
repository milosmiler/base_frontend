var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');


 
gulp.task('html', function() {
  gulp.src('Components/jade/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('styles', function() {
    gulp.src('Components/Scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch',function() {
    gulp.watch('./**/*.scss',['styles']);
    gulp.watch('./**/*.jade',['html']);
});

