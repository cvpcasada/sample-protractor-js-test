var gulp = require('gulp');

// The protractor task
var protractor = require('gulp-protractor').protractor;

// Start a standalone server
var webdriver_standalone = require('gulp-protractor').webdriver_standalone;

// Download and update the selenium driver
var webdriver_update = require('gulp-protractor').webdriver_update;

// Downloads the selenium webdriver
gulp.task('webdriver_update', webdriver_update);

// Start the standalone selenium server
// NOTE: This is not needed if you reference the
// seleniumServerJar in your protractor.conf.js
gulp.task('webdriver_standalone', webdriver_standalone);

// Setting up the test task
gulp.task('protractor', ['webdriver_update'], function(cb) {
    gulp.src(['tests/*Spec.js','tests/workbench/*Spec.js']).pipe(protractor({
        configFile: 'protractor.conf.js',
    })).on('error', function(e) {
        console.log(e)
    }).on('end', cb);
});
