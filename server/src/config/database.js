const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    database: process.env.DB_NAME || 'registry_ocorrenc',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || 'localhost',
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
})();

module.exports = sequelize;