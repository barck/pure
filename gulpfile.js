var gulp = require('gulp'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    twig = require('gulp-twig'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync');

var paths = {
    style: "css",
    js: "scripts"
};

gulp.task('default',  ['clean'], function() {

    gulp.start('browser-sync', 'stylus', 'scripts', 'compile', 'copy', 'watch');
    // place code for your default task
});



gulp.task('scripts', function() {
    return gulp.src('app/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('public/scripts/'));
});


// Get one .styl file and render
gulp.task('stylus', function () {
    return gulp.src('app/style/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({stream: true}));
});



gulp.task('compile', function () {
    'use strict';
    return gulp.src('app/views/index.twig')
        .pipe(twig({
            data: {
                paths:paths
            }
        }))
        .pipe(gulp.dest('public'));
});



gulp.task('clean', function () {
    return gulp.src('public/', {read: false})
        .pipe(clean());
});



gulp.task('copy', function () {
    gulp.src('app/img/**')
        .pipe(gulp.dest('public/img'));
});



gulp.task('watch', function() {
    gulp.watch('app/style/**/*.styl', ['stylus']); // Наблюдение за styl файлами
    // Наблюдение за другими типами файлов
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'public' // Директория для сервера - app
        },
        notify: true // Отключаем уведомления
    });
});
