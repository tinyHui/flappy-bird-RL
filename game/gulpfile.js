const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require("gulp-sass");
const minifycss = require('gulp-minify-css');
const del = require('del');

gulp.task('default', ["clean", "scss"]);

gulp.task('clean', () => {
    return del('static/*.css');
  }
);

gulp.task('scss', () => {
    gulp.src('res/*.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('static'));
    gulp.src('res/*.png')
        .pipe(gulp.dest('static'));
  }
);

gulp.task('watch', function() {
  gulp.watch('res/*.scss', ['scss']);
});
