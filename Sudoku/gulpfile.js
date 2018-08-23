const gulp = require('gulp');
const webpack = require('webpack-stream');
const less = require('gulp-less');

const config = require('./webpack.config.js');

// 编译 Javascript
gulp.task('webpack', () => {
  return gulp.src('./src/js/*.js')
      .pipe(webpack(config))
      .pipe(gulp.dest('./www/js'))
})

// 编译 less => css
gulp.task('less', () => {
  
  return gulp.src('./src/less/*.less')
      .pipe(less())
      .pipe(gulp.dest('./www/css'))
})


gulp.task('default', ['webpack', 'less'])
