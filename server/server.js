const express = require('express');
const methodOverride = require('method-override');
const sequelize = require('./src/config/database');
const userRoutes = require('./src/routes/userRoute');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

dotenv.config();
const app = express();
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use('/',userRoutes);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        await sequelize.sync({ force: false });
        console.log('Modelos sincronizados com o banco de dados.');
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
    }
})();
