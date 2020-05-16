# [Главная](README.md)
***
## 1-W_1 | Создан файл webpack.config.js + добавлен readme.md
- Создан файл webpack.config.js + добавлен readme.md
* * *
## 2-W_2 | Базовая конфигурация package.json и webpack.config.js
- `npm init` = > _создан файл package.json_
- идем глядеть https://webpack.js.org/guides/getting-started/
- `npm install webpack webpack-cli --save-dev`
> --save-dev значит что эти пакеты не идут в prod
- настраиваем файл webpack.config.js
- добавляем скрипты запуска в package.json
- `npm run start`
> если вдруг ошибка, то устанавливаем webpack глобально
- `node dist/bundle.js`
> это типо для запуска посмотреть работает ли
* * *
## 3-W_3 | Добавление плагинов
- смотрим https://webpack.js.org/plugins/
- добавляем HtmlWebpackPlugin
    - `npm install --save-dev html-webpack-plugin`
- добавляем CopyWebpackPlugin
    - `npm install copy-webpack-plugin --save-dev`
    - добавляем создание объекта CopyPlugin для переноса favicon.ico
- добавляем Clean plugin for webpack
    - `npm install --save-dev clean-webpack-plugin`
- создали index.html
- добавляем код создания объектов плагина в webpack.config.js
> в процессе мы добавили такую штуку как `bundle.[hash].js` , 
> имею ввиду hash она при создание bundle добавляет ей hash чтобы на проде не было проблем
- немного редактируем index.html для favicon.ico
- добавляем MiniCssExtractPlugin, нужен для выноса css из js файла
    - `npm install --save-dev mini-css-extract-plugin`
- добавляем **resolve** в **webpack.config.js**
- добавили alias
***
## 4-W_4 | Настройка лоадеров
- смотрим https://webpack.js.org/loaders/
- sass-loader
    - `npm install sass-loader sass --save-dev`
    - `npm install --save-dev css-loader`
- добавляем rules
- смотрим https://webpack.js.org/loaders/babel-loader/
- или https://babeljs.io/setup#installation
- установка `npm install --save-dev babel-loader @babel/core`
- установка `npm install @babel/preset-env --save-dev`
> это типо включает все самые последние фишки babel
- добавляем **browserslist** в **package.json**
***
## 5-W_5 | Добавление режимов сборки
- добавляем переменные isProd, isDev
- установка `npm i -D cross-env`
    > помогает определять операционку и правильно задает переменную process.env.NODE_ENV
- изменяем скрипты запуска используя cross-env
- добавляем поле devtool
- добавляем удобную функцию `fileName()`
- добавим devServer
    - `npm install webpack-dev-server --save-dev`
- добавляем babel polyfill чтобы в браузере последние фишки работали
    - `npm install --save @babel/polyfill`
***
## 6-W_6 | Настройка ESlint
- фиксим проблему с релоадем css
- `npm i eslint eslint-loader babel-eslint -D`
- `npm install --save-dev eslint eslint-config-google -D`
- добавили файлы для конфигурации eslint
- рефакторинг
***
## 7-L_1 | Планирование верстки
- посмотрел draw.io
***
