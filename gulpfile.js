/// <reference path="typings/main.d.ts" />

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    babel = require('gulp-babel'),
    webpack = require('webpack'),
    watch = require('gulp-watch'),
    gutil = require('gulp-util'),
    rimraf = require('rimraf'),
    bower = require('gulp-bower');

gulp.task('clean', (cb) => {
    rimraf('./dist', cb);
});

gulp.task('webpack', () => {
    gutil.log(gutil.colors.yellow('Start task webpack'));
    var options = require('./webpack.config.js');
    webpack(options, (err, stats) => {
        if (err) {
            console.error('Web pack error' + err);
        }
    });
});

gulp.task('babel-server-js', (cb) => {
    return gulp.src(['./src/**/*.js', '!./src/public/**/*.js'])
        .on('error', err => {console.log(err);})
        .pipe(babel({
            plugins: ['transform-es2015-modules-commonjs'],
            sourceMaps: 'both',
            filename: 'babel-errors'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('inject', () => {
    var wiredep = require('wiredep').stream;

    var options = {
        bowerJson: require('./bower.json'),
        directory: './dist/public/lib',
        ignorePath: '../../../../dist/public/',
        onError: function(err) {
            console.error('Inject fail:' + err);
        },
    };
    return gulp.src('./src/**/*.handlebars')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('monitor', () => {
    livereload.listen();
    watch('./src/**/*.handlebars', () => {
        gulp.start('inject');
    });

    watch(['./src/**/*.js', '!./src/public/**/*.js'], () => {
        gulp.start('babel-server-js');
    });

    watch(['./src/public/**/*.js', './src/Utils/**/*.js', './src/public/**/*.css'], () => {
        gutil.log(gutil.colors.yellow('Start web pack task'));
        gulp.start('webpack');
    });

    watch('./dist/**/*', {
        readDelay: 2000
    }, (event, filename) => {
        livereload.changed(__dirname + '/dist');
    });

    nodemon({
        script: './dist/server',
        ignore: './dist/public/',
        watch: './dist/',
        ext: 'js',
        delay: 1000,
        stdout: true,
        debug: true
    });
});

gulp.task('build', ['inject', 'babel-server-js', 'webpack']);

gulp.task('bower', () => {
    return bower();
});

gulp.task('rebuild', ['clean'], () => {
    bower().on('end', () => {
        gulp.start('build');
    });
});

gulp.task('develop', ['build', 'monitor']);

gulp.task('default', [
    'build'
]);