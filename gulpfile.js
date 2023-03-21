import gulp from "gulp";

import {path} from "./gulp/config/path.js";

import { plugins } from "./gulp/config/plugins.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

import { copy } from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js"

//Наглядач за змінами в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
    //* Для того щоб зміни у файлах HTML  автоматично завантажувались на сервер, необхідно в наступному рядку   "html"   замінити на   "gulp.series(html, ftp)".  Для SCSS та JS можна зробити те саме*//
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export {svgSprive};

//Послідовна обробка стилів
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//Основні задачі
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

//Побудова сценарію виконання задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

//Експорт сценаріїв
export { dev };
export { build };
export { deployZIP };
export { deployFTP };

//Виконання сценарію по замовчуванню
gulp.task('default', dev);