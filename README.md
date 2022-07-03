# Сборка проекта на Gulp 4
Швидко налаштувати складання вашого проекту на Gulp і писати код на:
- HTML, PUG
- CSS, SCSS, SASS, LESS, STYLUS
- Java Script, Type Script, Coffee Script

## Функціонал складання
- компіляція препроцесора PUG
- мініфікація HTML
- компіляція препроцесорів LESS, SASS, STYLUS
- мініфікація CSS
- автоматичне додавання префіксів CSS
- транспіляція мов Type Script та Coffee Script
- перетворення коду ECMAScript 2015+ у зворотно сумісну версію JavaScript за допомогою Babel
- мініфікація JavaScript
- об'єднання декількох файлів JavaScript в один
- стиснення зображень
- відстеження нових зображень, які ще не були стиснуті
- відстеження змін у файлах та автоматичний запуск повторної обробки
- генерація sourcemaps
- Відображення розмірів файлів у терміналі
- локальний сервер з автоматичним оновленням сторінки під час зміни файлів

## Input
|| HTML | Styles | Scripts | Images |
|:---|:------:|:-----:|:----:|:-----:|
| **Каталог** | src/ | src/styles/ | src/scripts/ | src/img/ |
| **Расширение** | .html, .pug | .css, .sass, .scss, .less, .styl | .js, .ts, .coffee | .jpg, .png, .gif |

## Output
|| HTML | CSS | JavaScript | Images |
|:---|:------:|:-----:|:----:|:-----:|
| **Путь** | dist/ | dist/css/style.min.css | dist/js/main.min.js | dist/img/ |

## Зупуск:
1. Завантажити всі файли проекту
2. У терміналі перейти до каталогу проекту
3. Виконати команду: npm i (має бути встановлений node.js)
4. Створити каталоги та файли
5. Виконати команду: gulp (запуск тяга default)
6. Писати свій код та насолоджуватися автоматичним складанням проекту.

## Используемые NPM пакеты
[gulp](https://www.npmjs.com/package/gulp) Сборщик Gulp  
[gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) Мініфікація HTML файлів
[gulp-pug](https://www.npmjs.com/package/gulp-pug) Pug препроцесор HTML кода  
[gulp-less](https://www.npmjs.com/package/gulp-less) Компіляція Less файлів   
[gulp-stylus](https://www.npmjs.com/package/gulp-stylus)  КомпіляціяS tyl файлів  
[sass](https://www.npmjs.com/package/sass)  Компілятор Sass  
[gulp-sass](https://www.npmjs.com/package/gulp-sass)  Компіляція Sass і Scss файлів  
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) Стиснення та оптимізація Java Script коду
[gulp-coffee](https://www.npmjs.com/package/gulp-coffee) Перетворює Coffee Script на Java Script
[gulp-typescript](https://www.npmjs.com/package/gulp-typescript) Перетворює Type Script на Java Script
[typescript](https://www.npmjs.com/package/typescript)Мова Type Script 
[gulp-babel](https://www.npmjs.com/package/gulp-babel) Перетворює Java Script на старий стандарт 
[@babel/core](https://www.npmjs.com/package/@babel/core) Ядро Babel  
[@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) Пресе для компіляції Babel
[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) Мініфікація та оптимізація CSS файлів
[del](https://www.npmjs.com/package/del) Видалення каталогів та файлів
[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) Карта рядків коду для інструментів розробника
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) Автоматическое добавление префиксов в CSS   
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) Сжатие изображений   
[gulp-concat](https://www.npmjs.com/package/gulp-concat) Объединение нескольких файлов в один  
[gulp-newer](https://www.npmjs.com/package/gulp-newer) Отслеживание только новых файлов  
[gulp-rename](https://www.npmjs.com/package/gulp-rename) Переименовывает файлы    
[gulp-size](https://www.npmjs.com/package/gulp-size) Отображение информации о размерах файлов в терминале  
[browser-sync](https://browsersync.io/docs/gulp) Автоматическое обновление сайта при изменении файлов  

### Автору на кофе
![Сбер VISA](https://img.shields.io/badge/Card-4274320032331582-333?style=for-the-badge&logo=visa&labelColor=08a652)
[![Yoomoney](https://img.shields.io/badge/-Yoomoney-7f2bfd?style=for-the-badge)](https://yasobe.ru/na/itdoctor)
[![PayPal](https://img.shields.io/badge/-PayPal-0070ba?style=for-the-badge&logo=PayPal&logoColor=FF0000)](https://paypal.me/itdoctorstudio)

### Контакты
[![YouTube](https://img.shields.io/badge/-YouTube-333?style=for-the-badge&logo=YouTube&logoColor=FF0000)](https://www.youtube.com/c/ITDoctor)
[![Курсы на Udemy](https://img.shields.io/badge/-Udemy-333?style=for-the-badge&logo=Udemy&logoColor=fff)](https://www.udemy.com/user/useinov-ismail-asanovich/)
[![Telegram](https://img.shields.io/badge/-Telegram-333?style=for-the-badge&logo=telegram&logoColor=27A0D9)](https://t.me/itdoctorstudio)
[![Bot](https://img.shields.io/badge/-Bot-333?style=for-the-badge)](https://t.me/itdoctorNavigatorBot?start)
[![Instagram](https://img.shields.io/badge/-Instagram-333?style=for-the-badge&logo=instagram&logoColor=B4068E)](https://instagram.com/ismail_asanovich)
[![VK](https://img.shields.io/badge/-VK-333?style=for-the-badge&logo=Vk&logoColor=27A0D9)](https://vk.com/itdoctorstudio)
[![GitHub](https://img.shields.io/badge/-GitHub-333?style=for-the-badge&logo=GitHub&logoColor=fff)](https://github.com/morphIsmail)
