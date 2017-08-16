# [gulp](http://gulpjs.com)-remove-files [![Build Status](https://secure.travis-ci.org/danielhusar/gulp-remove-files.svg?branch=master)](http://travis-ci.org/danielhusar/gulp-remove-files)

###Remove all files from stream.
(this is removing files from stream and disk so it might not go very well with gulp plugin requirements, so it might get banned :) but I needed this functionality on one of the projects)

## Install

```bash
npm install --save-dev gulp-remove-files
```

## Example

```javascript
var gulp = require('gulp');
var removeFiles = require('gulp-remove-files');

gulp.task('clearHtml', function () {
  gulp.src('./public/*.html')
    .pipe(removeFiles());
});
```

## Options

None


## License

MIT © [Daniel Husar](https://github.com/danielhusar)
