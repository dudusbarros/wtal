var gulp = require('gulp'),
		concat = require('gulp-concat'),
		imagemin = require('gulp-imagemin'),
		jshint = require('gulp-jshint'),
		minifycss = require('gulp-minify-css'),
		pngquant = require('imagemin-pngquant'),
		rename = require('gulp-rename'),
		uglify = require('gulp-uglify');

var cssfiles = 'css/*.css',
		imgfiles = 'img/*',
		jsfiles = 'js/*.js';

gulp.task('villa', function() {
	gulp.src(['css/villa-foundation.css', 'css/villa.css', 'css/villa-grid.css'])
			.pipe(concat('villa.css'))
			.pipe(gulp.dest('dist/css'));
	gulp.src('dist/css/villa.css')
			.pipe(minifycss())
			.pipe(rename({
				extname: '.min.css'
			}))
			.pipe(gulp.dest('dist/css'));
});

gulp.task('mowe', function() {
	gulp.src('css/mowe*.css')
			.pipe(concat('mowe.css'))
			.pipe(gulp.dest('dist/css'));
	gulp.src('dist/css/mowe.css')
			.pipe(minifycss())
			.pipe(rename({
				extname: '.min.css'
			}))
			.pipe(gulp.dest('dist/css'));
});

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
	gulp.src(['dist/js/villa.js', 'dist/js/mowe.js', 'dist/js/app.js'])
			.pipe(rename({
				extname: '.min.js'
			}))
			.pipe(uglify({
				preserveComments: 'some'
			}))
			.pipe(gulp.dest('dist/js'));
});

gulp.task('img', function() {
	gulp.src(imgfiles)
			.pipe(imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			}))
			.pipe(gulp.dest('dist/img'));
});

gulp.task('default', function() {
	var css = ['villa', 'mowe', 'wtal'];
	var js = ['js'];
	gulp.watch(cssfiles, css);
	gulp.watch(jsfiles, ['js']);
});