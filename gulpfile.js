//Gulp file for all the build task
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    browserSync = require('browser-sync').create(),
    http = require('http'),
    reload = browserSync.reload,
    st = require('st');

gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
        .pipe(browserify({
            transform: 'reactify'
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});
gulp.task('static',function(){
    return gulp.src(['src/js/foundation/**/*','src/css/foundation.css','src/js/vendor/**/*'],{base:'src'})
            .pipe(gulp.dest('dist'));
});
gulp.task('copy', function() {
   gulp.src(['src/index.html'],{base:'src'})
        .pipe(gulp.dest('dist'))
        .pipe(reload({stream:true}));
});
gulp.task('copy-src',['browserify','copy'],browserSync.reload);
gulp.task('serve',['browserify','copy','static'],function(){
    browserSync.init({
        server:'./dist'
    });
    gulp.watch(['src/**/*.*','src/js/**/*'],['copy-src']).on('change',function(){
        reload();
    })
})




gulp.task('default',['serve']);
