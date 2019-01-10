var gulp = require('gulp');
var less = require('gulp-less');
var smartgrid = require('smart-grid');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();



const smartGridConf = {
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


gulp.task('test', function () {
	console.log('TASK IS RUN!!!');
});



gulp.task('preproc', function () {
	return gulp.src('./src/less/style.less')
		.pipe(less())
		.pipe(gulp.dest('./dist/css/'))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});


gulp.task('htmlmin', function () {
	return gulp.src('./src/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist'))
		.pipe(browserSync.reload({
			stream: true
		}));
});



gulp.task('watch', ['preproc', 'htmlmin', 'browserSync'], function () {
	gulp.watch('./src/less/style.less', ['preproc']);
	gulp.watch('./src/*.html', ['htmlmin']);
});


gulp.task('grid', function () {
	smartgrid('./src/less', smartGridConf);
});


gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	});
});
