/// <reference path="typings/main.d.ts" />

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    babel = require('gulp-babel');

gulp.task('babel-client-js', () => {
    return gulp.src('./src/public/js/*.js')
        .pipe(babel({
            plugins: ['transform-es2015-modules-amd']
        }))
        .pipe(gulp.dest('./dist/public/js'));
});

gulp.task('babel-server-js', () => {
    return gulp.src(['./**/*.js', '!./src/public/**/*.js'])
        .pipe(babel({
            plugins: ['transform-es2015-modules-commonjs']
        }))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('inject', ['babel-client-js'], () => {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    var injectSrc = gulp.src(['./dist/public/css/*.css', './dist/public/js/*.js'], {
        read: false
    });

    var injectOptions = {
        ignorePath: 'public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './dist/public/lib',
        ignorePath: '../public',
        onError: function(err) {
            console.error('Inject fail:' + err);
        },
    };

    return gulp.src('./src/views/**/*.handlebars')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./dist/views'));
});

gulp.task('develop', ['inject'], function() {
    livereload.listen();
    nodemon({
        script: 'server',
        ext: 'js handlebars',
        stdout: false
    }).on('readable', function() {
        this.stdout.on('data', function(chunk) {
            if (/^Express server listening on port/.test(chunk)) {
                livereload.changed(__dirname);
            }
        });
        this.stdout.pipe(process.stdout);
        this.stderr.pipe(process.stderr);
    });
});

gulp.task('default', [
    'develop'
]);