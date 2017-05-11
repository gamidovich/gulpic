var gulp = require('gulp');
var concat = require('gulp-concat');
var scss = require('gulp-scss');
var flatten = require('gulp-flatten');
var svgSprites = require('gulp-svg-sprites');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var fileInclude = require('gulp-file-include');
var del = require('del');
var pages = require('gulp-gh-pages');



 gulp.task("style", function () {
        return gulp.src(
            "scss/in.scss"
        )
        .pipe(scss())
        .pipe(gulp.dest("./"));
    });

function done() {
	console.log('Задача выполнена успешно!!!');	
};

 gulp.task("del", function (done) {
       
        return del([
        		"assets"
        	]);

        done();

    });

 gulp.task("delNM", function () {
        return del([
        		"node_modules, .gulp-scss-cache"
        	]);

    });

gulp.task("copy", function() {
	gulp.src('blocks/**/*.{jpg, png}')
		.pipe(flatten({includeParents: 0}))
		.pipe(gulp.dest('assets/images'));	
	gulp.src('blocks/**/*.{svg}')
		.pipe(flatten({includeParents: 0}))
		.pipe(gulp.dest('assets/svg'));
});
 

 gulp.task("pages", function() {
 	gulp.src('dist/**/*')
 	.pipe(pages());

 });



 gulp.task("svg", function() {
 	gulp.src('blocks/**/*.svg')
 	.pipe(svgSprites())
 	.pipe(gulp.dest('assets/svg'));

 });


 