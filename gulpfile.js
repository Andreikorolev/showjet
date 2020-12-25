"use strict";

// Load plugins
const gulp = require("gulp");
const browserSync = require("browser-sync");
const reload = browserSync.reload;
const compass = require("compass-importer");
const del = require("del");
const prefixer = require("gulp-autoprefixer");
const cache = require("gulp-cache");
const concat = require("gulp-concat");
const csscomb = require("gulp-csscomb");
const imagemin = require("gulp-imagemin");
const flatten = require("gulp-flatten");
const mediacomb = require("gulp-group-css-media-queries");
const order = require("gulp-order");
const rename = require("gulp-rename");
const scss = require("gulp-sass");
const twig = require("gulp-twig");
const watch = require("gulp-watch");
const imageminJpegRecompress = require("imagemin-jpeg-recompress");
const plumber = require("gulp-plumber");
const beep = require("beepbeep");

const onError = (err) => {
  beep(2);
  this.emit("end");
};

// img
function img() {
  return gulp
    .src("app/img/**/*")
    .pipe(
      cache(
        imagemin(
          [
            imageminJpegRecompress({
              loops: 4,
              min: 50,
              max: 95,
              quality: "high",
            }),
          ],
          {
            verbose: true,
          }
        )
      )
    )
    .pipe(gulp.dest("dist/img"));
}

// scss
function scssFunc() {
  return gulp
    .src([
      "app/fonts/**/*.css",
      "libs/mixins/**/*.+(scss|css)",
      "libs/other-libs/**/*.+(scss|css)",
      "app/blocks/base.blocks/**/*.+(scss|css)",
      "app/blocks/common.blocks/**/*.+(scss|css)",
      "app/blocks/site.blocks/**/*.+(scss|css)",
    ])
    .pipe(plumber())
    .pipe(
      order(
        [
          "libs/mixins/**/*.+(scss|css)",
          "app/fonts/**/*.css",
          "app/blocks/base.blocks/base/base.scss",
          "libs/other-libs/**/*.+(scss|css)",
          "app/blocks/common.blocks/**/*.+(scss|css)",
          "app/blocks/site.blocks/**/*.+(scss|css)",
        ],
        { base: "./" }
      )
    )
    .pipe(concat("style.scss"))
    .pipe(scss({ importer: compass, includePaths: ["libs/mixins"] }))
    .pipe(
      prefixer({
        overrideBrowserslist: ["last 10 versions"],
        cascade: false,
      })
    )
    .pipe(mediacomb())
    .pipe(csscomb())
    .pipe(gulp.dest("./dist/css/"));
}

// js
function js() {
  return (
    gulp
      .src([
        "libs/other-libs/**/*.js",
        "app/blocks/base.blocks/**/*.js",
        "app/blocks/common.blocks/**/*.js",
        "app/blocks/site.blocks/**/*.js",
      ])
      .pipe(concat("main.js"))
      .on("error", function handleError() {
        this.emit("end");
      })
      // .pipe(uglify({
      //     comments: false
      // }))
      .pipe(gulp.dest("./dist/js/"))
      .pipe(reload({ stream: true }))
  );
}

// twig
function twigFunc() {
  return gulp
    .src([
      "!app/blocks/site.blocks/**/home-page.twig",
      "app/blocks/site.blocks/**/*.twig",
    ])
    .pipe(
      twig({
        base: "app",
      })
    )
    .pipe(flatten())
    .pipe(gulp.dest("dist"))
    .pipe(reload({ stream: true }));
}

// twig home-page
function twigHomePageFunc() {
  return gulp
    .src("app/blocks/site.blocks/**/home-page.twig")
    .pipe(
      twig({
        base: "app",
      })
    )
    .pipe(flatten())
    .pipe(rename("index.html"))
    .pipe(gulp.dest("dist"))
    .pipe(reload({ stream: true }));
}

// fonts
function fonts() {
  return gulp.src("app/fonts/**/*").pipe(gulp.dest("dist/fonts"));
}

// Watch files
const watchSCSS = () =>
  gulp.watch("app/blocks/**/*.+(scss|css)", gulp.series(scssFunc));
const watchJS = () => gulp.watch("app/blocks/**/*.js", gulp.series(js));
const watchLibJS = () => gulp.watch("libs/other-libs/*.js", gulp.series(js));
const watchTWIG = () =>
  gulp.watch("app/blocks/**/*.twig", gulp.series(twigFunc));
const watchTWIGINDEX = () =>
  gulp.watch("app/blocks/**/*.twig", gulp.series(twigHomePageFunc));
const watchIMG = () => gulp.watch("app/img/**/*", gulp.series(img));
const watchFONTS = () =>
  gulp.watch("app/fonts/**/*", gulp.series(fonts, scssFunc));

const dev = gulp.series(
  gulp.parallel(scssFunc, js, twigFunc, twigHomePageFunc, img, fonts),
  gulp.parallel(
    watchSCSS,
    watchJS,
    watchLibJS,
    watchTWIG,
    watchIMG,
    watchFONTS,
    watchTWIGINDEX
  )
);
exports.default = dev;
