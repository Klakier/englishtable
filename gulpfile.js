var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload');


gulp.task('inject', () => {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], {
        read: false
    });

    var injectOptions = {
        ignorePaht: 'public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../public'
    };

    return gulp.src('./views/**/*.handlebars')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./views'));
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