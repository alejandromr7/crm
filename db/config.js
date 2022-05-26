const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mssql',

    define: {
        timestamps: false
    },

    logging: false

});

module.exports = db;