var gulp = require('gulp');
var browserify = require('browserify');  // Bundles JS.
var del = require('del');  // Deletes files.
var reactify = require('reactify');  // Transforms React JSX to JS.
var source = require('vinyl-source-stream');

var paths = {
  app_js: ['./js/app.js'],
  js: ['js/*.js']
};

// var path = {
//   MINIFIED_OUT: 'build.min.js',
//   OUT: 'build.js',
//   DEST: 'dist',
//   DEST_BUILD: 'dist/build',
//   DEST_SRC: 'dist/src',
//   ENTRY_POINT: './js/app.js'
// };


// Our JS task. It will Browserify our code and compile React JSX files.
gulp.task('js', function() {
  // Browserify/bundle the JS.
  browserify(paths.app_js)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'));
});
 
// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
  gulp.watch(paths.js, ['js']);
});
 
// The default task (called when we run `gulp` from cli)
gulp.task('default', ['watch', 'js']);