'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var fs = require('q-io/fs');

module.exports = function () {

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-files-remove', 'Streaming not supported'));
      return cb();
    }

    fs.remove(file.path)
      .then(cb, function(err) {
        this.emit('error', new gutil.PluginError('gulp-files-remove', err));
        cb();
      }.bind(this));
  });

};
