/// <reference path="typings/main.d.ts" />

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    babel = require('gulp-babel'),
    webpack = require('webpack'),
    watch = require('gulp-watch'),
    gutil = require('gulp-util');

gulp.task('liverealod', () => {
    livereload.listen();
    watch('./dist/**/*', {
        readDelay: 2000
    }, (event, filename) => {
        livereload.changed(__dirname + '/dist');
    });
});

gulp.task('babel-client-js', () => {
    return gulp.src('./src/public/js/*.js')
        .pipe(babel({
            plugins: ['transform-es2015-modules-amd']
        }))
        .pipe(gulp.dest('./dist/public/js'));
});

gulp.task('webpack', ['liverealod'], (callback) => {
    console.log('task: webpack');
    webpack(require('./webpack.config.js'), (err, stats) => {
        if (err) {
            console.error('Web pack error' + err);
            callback();
        }
        //livereload.changed(__dirname + '/dist/public');
    });
});

gulp.task('babel-server-js', (cb) => {
    console.log('Task babel-server-js');
    watch(['./src/**/*.js', '!./src/public/**/*.js'], () => {
        console.log('Task babel-server-js WATCH');
        gulp.src(['./src/**/*.js', '!./src/public/**/*.js'])
            .pipe(babel({
                plugins: ['transform-es2015-modules-commonjs']
            }))
            .pipe(gulp.dest('./dist/js'));
    });
});

gulp.task('watch', () => {
    watch('./src/public/views/**/*.handlebars', () => {});
});

gulp.task('inject', () => {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var options = {
        bowerJson: require('./bower.json'),
        directory: './dist/public/lib',
        ignorePath: '../../../../dist/public/',
        onError: function(err) {
            console.error('Inject fail:' + err);
        },
    };
    return gulp.src('./src/public/views/**/*.handlebars')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./dist/public/views'));
});

gulp.task('develop', ['babel-server-js', 'inject'], function() {
    nodemon({
        script: './dist/js/server',
        tasks: ['inject', 'webpack'],
        ignore: ['dist/*'],
        watch: [__dirname + '/dist/js'],
        ext: 'js',
        stdout: false
    }).on('restart', function(files) {
        console.log('liverealod!!');
        livereload.changed(__dirname);
    });
});

gulp.task('monitor', () => {
    nodemon({
        script: './dist/js/server',
        watch: './dist/js/',
        ext: 'js',
        delay: 1000,
        stdout: false
    });
});

gulp.task('foo', ['inject', 'babel-server-js', 'webpack', 'monitor', 'liverealod'], () => {
    console.log('do nothing');
});

gulp.task('default', [
    'develop'
]);