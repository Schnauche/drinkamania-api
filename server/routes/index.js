const main = require('./main');
const menus = require('./menu');

module.exports = app => {
    app.use('/', main);
    app.use('/menu', menus);
}