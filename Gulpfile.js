var gulp = require('gulp'),
		concat = require('gulp-concat'),
		imagemin = require('gulp-imagemin'),
		jshint = require('gulp-jshint'),
		minifycss = require('gulp-minify-css'),
		pngquant = require('imagemin-pngquant'),
		rename = require('gulp-rename'),
		uglify = require('gulp-uglify'),
		tinypng = require('gulp-tinypng');

var cssfiles = 'css/*.css',
		imgfiles = 'img/*',
		jsfiles = 'js/*.js';

imgfiles = 'img/compress/*';

gulp.task('wtal', function() {
	gulp.src('css/wtal.css')
			.pipe(gulp.dest('dist/css'));
	gulp.src('dist/css/wtal.css')
			.pipe(minifycss())
			.pipe(rename({
				extname: '.min.css'
			}))
			.pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
	gulp.src(jsfiles)
			.pipe(jshint())
			.pipe(jshint.reporter('default'))
			.pipe(gulp.dest('dist/js'));
	gulp.src(['dist/js/dist.js'])
			.pipe(rename({
				extname: '.min.js'
			}))
			.pipe(uglify({
				preserveComments: 'some'
			}))
			.pipe(gulp.dest('dist/js'));
});

gulp.task('tinypng', function () {
	gulp.src(imgfiles)
		.pipe(tinypng('API_KEY'))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('img', function() {
	gulp.src(imgfiles)
		.pipe(imagemin({
			optimizationLevel: 7,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(tinypng('8eNoFlUv4wHzam_8GleKHdhH2YFk9xAd'))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('default', function() {
	var css = ['villa', 'mowe', 'wtal'];
	var js = ['js'];
	gulp.watch(cssfiles, css);
	gulp.watch(jsfiles, ['js']);
});