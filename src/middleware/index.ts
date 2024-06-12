// Un middleware es una funcion que se ejecuta entre la peticion y antes de llegar al servidor, son funciones intermedias que se ejecutan en cada request
import {Request, Response, NextFunction} from 'express';
import { validationResult } from 'express-validator'

export const handleInputErrors = (req: Request, res: Response, next: NextFunction) => {
    let errors = validationResult(req); // trae el resultado de la validacion. req es donde están los campos, lo que queremos evaluar
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    
    next(); // significa que se vaya a la siguiente funcion, que avance con el flujo
}