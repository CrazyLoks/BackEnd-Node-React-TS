import { exit } from 'node:process'
import db from '../config/db'

const clearDB = async () => {
    try {
        await db.sync({force: true}); // cierra la db
        console.log('Datos eliminados correctamente');
        exit(0); // finaliza el proceso de manera exitosa
    } catch (error) {
        console.log(error);
        exit(1); // Finaliza el proceso con errores
    }
}

if (process.argv[2] === '--clear') { // leemos la linea de comandos, el comando va a traer --clear, que es pretest, este se va a ejecutar antes de test, simepre 
    clearDB(); // Limpiamos la base de datos
}