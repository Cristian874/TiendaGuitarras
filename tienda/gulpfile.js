//sass
const {src,dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

//saber a que archivo pertenece el css
const sourcemaps = require('gulp-sourcemaps');

//optimizar la hoja de css
const cssnano = require('cssnano');

//imagenes
const imagemin = require('gulp-imagemin');

function css(done){

    //compilar sass
    //ideptificar archivos
    src('src/scss/app.scss')
    .pipe(sourcemaps.init())
    //compilar
    .pipe(sass( {outputStyle : 'compressed'} ))
    .pipe(postcss([autoprefixer(), cssnano()]))
    //guardar
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css')) 




    done();
}

function script(done){

    //compilar sass
    //ideptificar archivos
    src('src/js/app.js')
    //compilar

    //guardar
    .pipe(dest('build/js')) 




    done();
}
function imagenes(done){
    src('src/img/**/*')
    .pipe(imagemin({optimizationLevel: 3}))
    .pipe(dest('build/img'));


    done()
}
function dev(done){
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', script);
    



    done();
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series(css, script,imagenes, dev)
