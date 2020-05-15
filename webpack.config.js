const path = require('path');

module.exports = {
    // показывает где хранятся исходники
    context: path.resolve(__dirname, 'src'),
    // mode
    mode: 'development',
    // указываем входные точки для приложения
    entry: './index.js',
    // указываем куда и как складывать результат
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
