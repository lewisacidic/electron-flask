var gulp      = require('gulp'),
    webserver = require('gulp-webserver'),
    spawn     = require('child_process').spawn,
    packager  = require('electron-packager'),
    electron  = require('electron-prebuilt');

var PIPE = {stdio: 'inherit'}; 

gulp.task('serve:api', function(){
  return spawn('python', ['src/api.py'], PIPE);
});

gulp.task('serve:client', function () {
  return gulp.src('src').pipe(webserver({open: true}));
});

gulp.task('electron', function () {
  return spawn(electron, ['.'], PIPE);
});

gulp.task('build', function (callback) {
  
  var options = {
	dir: '.',
        name: 'ElectronFlask',
        platform: 'all',
	arch: 'all',
	version: '0.36.2',
	out: 'packages',
	overwrite: true
  };

  return packager(options, function done (err, appPath) {
    if (err) { return console.log(err); }
    callback();
  });
});
gulp.task('serve', ['serve:api', 'serve:client']);
