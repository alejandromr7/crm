const { Sequelize } = require('sequelize');
const db = require('../db/config');

const Clientes = db.define('Clientes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: Sequelize.STRING(50),
    empresa: Sequelize.STRING(50),
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'Usuario ya registrado'
        },
        validate: {
            isEmail: {
                msg: 'Agrega un correo valido'
            }
        }
    },
    telefono: Sequelize.STRING(10),
    notas: Sequelize.STRING(500),
});


module.exports = Clientes;