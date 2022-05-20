const sequelize = require('sequelize');
const connection = new sequelize('guiaperguntas', 'root', 'Si96513782', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;