const gulp = require("gulp");
const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

sass.compiler = require('node-sass');

gulp.task('default', watch);
gulp.task("sass", compilarSass);

function compilarSass() {
  return gulp
    .src("src/assets/sass/*.scss")
    .pipe(sass({
      outputStyle: "compressed",
    }))
    .on("error", sass.logError)
    .pipe(dest("./src/assets/css/"));
}

function watch() {
  gulp.watch("src/assets/sass/*.scss", compilarSass);
}