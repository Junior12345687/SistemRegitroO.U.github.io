const sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new sequelize({
    database: process.env.DB.NAME || 'registry_ocorrenc',
    username: process.env.DB.USER || 'root',
    password: process.env.DB.PASSWORD || '',
    host: process.env.DB.HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
});


(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
})
module.exports = sequelize;