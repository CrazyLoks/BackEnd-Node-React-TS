import express from 'express'
import colors from 'colors' // para darle colores a los mensajes de la consola
import cors, { CorsOptions } from 'cors'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express';
import swaggerSpec, { swaggerUiOptions } from './config/swagger';
import router from './router'
import db from './config/db';

// Conectar a la base de datos
async function connectDB() {
    try {
        await db.authenticate(); // conectar a la DB
        db.sync(); // si creamos columnas o lo que sea, lo va a ir actualizando
        // console.log(colors.blue('Conexion exitosa'))
    } catch (error) {
        console.log(colors.red.bold('Hubo un error')) 
    }
}
connectDB()

// Instancia de express
const server = express(); // aplicacion de express, framework de node.js

// Permitir conexiones con CORS
const corsOptions : CorsOptions = {
    origin: function(origin, callback) { // origin es el origen, es de donde se está enviando la petición, el callback nos va a permitir permitirt la conexion o negar la conexion
        if (origin === process.env.FRONTEND_URL) {
            callback(null, true); // el primer parametro es un error, si es que hay, el segundo es si permitimos la conexion o no
        } else {
            callback(new Error('Error de CORS'))
        }
    }
}
server.use(cors(corsOptions)); // .use es para que se ejecute en todo tipo de petición, que siempre esté en uso

// Leer datos de formularios
server.use(express.json()) // nos permite leer datos en el body de la peticion, en formato json

server.use(morgan('dev')); // morgan analiza las peticiones, regresa informacion util sobre cada una de ellas

server.use('/api/products', router); // va a 'usar' todas las 'funciones' o 'endpoints' que tiene router, get, post, delete y eso

// Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions)) // suaggerUi nos dará una interfaz de usuario para la documentacion, swaggerSpec es lo que nosotros configuramos, son las opciones, swaggerUiOptions son los estilos que configuramos en swagger.ts
export default server