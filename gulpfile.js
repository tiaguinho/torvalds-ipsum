var gulp = require('gulp'),
    minify = require('gulp-minify'),
    copy = require('gulp-copy'),
    gls = require('gulp-live-server');

gulp.task('serve', function() {

    var server = gls.static('test', 3000);
    server.start();

    gulp.watch(['dist/*.js', 'test/*.html'], function (file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task('compress', function() {
    return gulp.src('src/*.js')
            .pipe(minify({
                ext:{
                    src:'-debug.js',
                    min:'.js'
                },
                exclude: ['tasks'],
                ignoreFiles: ['.combo.js', '-min.js']
            }))
            .pipe(gulp.dest('dist'))
});

gulp.task('copy', function () {
   return gulp.src('dist/*.js')
            .pipe(copy('test/js', {prefix: 1}));
});

gulp.task('watch', function() {
    gulp.watch('src/*.js', ['compress', 'copy']);
});

gulp.task('default', ['compress', 'copy', 'watch', 'serve']);