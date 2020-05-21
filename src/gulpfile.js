const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const tinyPNG = require('gulp-tinypng');
 


gulp.task('default', defaultTask);

function defaultTask(cb) {
    console.log('Задача выполнена');
    cb();
}

gulp.task('minify-css', (cb) => {
    return gulp.src('./css/*.css').pipe(cleanCSS({compatibity: 'ie8'})).pipe(gulp.dest('dist/css/'));
    cb();
});

gulp.task('move-js', (cb) => {
    return gulp.src('./js/*.js').pipe(gulp.dest('dist/js/'));
    cb();
});

gulp.task('htmlmin', (cb) => {
    return gulp.src('./*.html').pipe(htmlmin({collapseWhitespace: true})).pipe(gulp.dest('dist/'));
    cb();
});
gulp.task('fonts', (cb) => {
    return gulp.src('./fonts/**/*').pipe(gulp.dest('dist/fonts'));
    cb();
});
gulp.task('tinypng', function (cb) {
    return gulp.src('./img/price/*.jpg')
        .pipe(tinyPNG('qmKbkmmhx68WmX3mMhP799VM91R585dy'))
        .pipe(gulp.dest('dist/img/price'));
});