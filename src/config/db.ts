import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';
dotenv.config(); // llamamos a las variables de entorno


const db = new Sequelize(process.env.DATABASE_URL!, { // conectamos los modelos
    models: [__dirname + '/../models/**/*.ts' ], // __dirname regresa la ubicacion del archivo que manda llamar esta funcion
    logging: false
});

export default db