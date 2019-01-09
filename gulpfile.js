var gulp = require('gulp');
var less = require('gulp-less');
var smartgrid = require('smart-grid');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();



var smartGridConf = {
	outputStyle: 'less',
	colums: 12,
	offset: '30px',   // межклоночник
	mobileFirst: false,
	container: {
		maxWidth: '1280px',
		fields: '30px'   // отступ от края экрана
	},
	breakPoints: {
		xl: {
			width: '1140px',
			fields: '30px'
		},
		lg: {
			width: '960px',
			fields: '30px'
		},
		md: {
			width: '720px',
			fields: '20px'
		},
		sm: {
			width: '540px',
			fields: '10px'
		},
		xs: {
			width: '480px',
			fields: '5px'
		}
	}
};


gulp.task('preproc', function () {
	return gulp.src('./src/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('./dist/css/'))
});

gulp.task('htmlmin', function () {
	return gulp.src('./src/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('grid', function () {
	smartgrid('./src/less', smartGridConf);
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});
