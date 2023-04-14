import * as dotenv from 'dotenv'
import express from 'express';
import { sequelize } from './database/db.js';
import empleadosRoutes  from './routes/empleados.routes.js';
import departamentosRoutes  from './routes/departamentos.routes.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 1234;

//Middlewares
app.use(express.json());

//Routes
app.use('/api', empleadosRoutes);
app.use('/api', departamentosRoutes);

const conectarDB = async () => {
    try {
        await sequelize
        .sync({ force: true })
        .then(() => {
            console.log('Conexión a la base de datos establecida');
        })
    } catch (error) {
        console.error('Error al conectar la base de datos:', error);
    }
}

conectarDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});



