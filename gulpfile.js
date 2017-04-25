var gulp = require("gulp");
var compilar = require("gulp-sass");
var minificarCcs = require("gulp-minify-css");
var minificarHtml = require("gulp-minify-html")

gulp.task('move-scss-tratado',function(){
	return gulp.src('./source/scss/*.scss')
		.pipe(compilar())
		.pipe(minificarCcs())
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('move-html-tratado',function(){
	return gulp.src('./source/index.html')
		   .pipe(minificarHtml())
		   .pipe(gulp.dest('./dist'));
		})

gulp.task('background',function(){
	gulp.watch('./source/scss/*.scss', ['move-scss-tratado'])
	gulp.watch('./source/index.html', ['move-html-tratado'])
})