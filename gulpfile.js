var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var bs = require('browser-sync').create();

var basePaths = {
    bower: './bower_components/',
    dev: './src/'
};

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        proxy: 'http://localhost'
    });
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
		        .pipe(sass())
		        .pipe(gulp.dest('./src/css'))
		        .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("./src/sass/**/*.scss", ['sass']);
    gulp.watch("./*.php").on('change', bs.reload);
});

gulp.task('minify-css', function() {
	return gulp.src('./src/css/**/*.css')
			    .pipe(cleanCSS())
			    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
			    .pipe(concat('style.min.css'))
			    .pipe(gulp.dest('./css'));
});

// run script uglifier and minifier
gulp.task('scripts', function() {
	gulp.src([
		basePaths.dev + 'js/tether.js', // Must be loaded before BS4
		
		// Start - All BS4 stuff
		basePaths.dev + 'js/bootstrap.js', 
		// End - All BS4 stuff
		
		])
		.pipe(concat('theme.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js/'));

	gulp.src([
		basePaths.dev + 'js/tether.js', // Must be loaded before BS4
		
		// Start - All BS4 stuff
		basePaths.dev + 'js/bootstrap.js', 
		// End - All BS4 stuff
		
		])
		.pipe(concat('theme.js'))
		.pipe(gulp.dest('./js/'));
});