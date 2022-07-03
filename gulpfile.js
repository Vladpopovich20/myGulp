
const gulp = require ('gulp')
const less = require('gulp-less')
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const del = require ('del')

// шляхи до каталогів
const paths = {
    styles: {
        src: 'src/styles/**/*.less',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dist/js/'
    }
}

// очищати файл dist
function clean(){ 
    return del (['dist'])
}
// end function

function styles() {
    return gulp.src(paths.styles.src)
 .pipe(less()) // виклик less
 .pipe(cleanCSS()) // видалить пробіли і крапки з комою і абзаци
 .pipe(rename({
    basename: 'main',
    suffix: '.min'
 })) // додаються стилі у файли main.min.css
 .pipe(gulp.dest(paths.styles.dest))// переміщення в каталог dest 
}


function watch (){ // функція яка автоматично зберігає і компілює
    gulp.watch(paths.styles.src, styles)
    gulp.watch(paths.scripts.src, scripts)
}

const build =gulp.series(clean, gulp.parallel(styles, scripts), watch) //  видаляється css


function scripts(){
    return gulp.src(paths.scripts.src,{
        sourcemaps:true
    })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest))
}









// виклики функції
exports.clean = clean
exports.styles = styles
exports.scripts = scripts
exports.watch = watch
exports.buid = build
exports.default=build 