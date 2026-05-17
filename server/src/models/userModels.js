const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique: true
    },

    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    telefone: {
        type: DataTypes.STRING(20),
        allowNull: true
    }

});

const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
});



module.exports = { User, Categoria };