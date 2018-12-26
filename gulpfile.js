var gulp = require('gulp');
var less = require('gulp-less');


gulp.task('test', function () {
	console.log('hello task');
});


gulp.task('preproc', function () {
	return gulp.src('./src/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('./dist/css/'))
});

