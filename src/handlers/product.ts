import { Request, Response } from 'express'; // es para tener autocompletado chingon con la req y res, se pone eso como tipos
import Product from '../models/Product.model';

export const getProducts = async (req: Request, res: Response) => { // funcion para traer los productos
    try {
        const products = await Product.findAll({
            order: [
                ['id', 'DESC'] // ordena por el precio de mayor a menor
            ],
        }); // find all es para traer todos los registros
        res.json({data: products})
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (req: Request, res: Response) => { // funcion para traer los productos
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({
                error: 'Producto No Encontrado'
            })
        }

        res.json({ data: product })
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = async (req: Request, res: Response) => { // req es lo que enviamos al servidor, res es lo que el servidor nos regresa
    try {
        const product = await Product.create(req.body); // Product es el modelo para interactuar con la base de datos, create crea el producto y lo almacena en la base de datos, evitando la linea de abajo
        // product.save(); // es para guardarlo en la base de datos
        res.status(201).json({data: product});
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params; // params es lo que mandamos por la url, o sea /:id
    const product = await Product.findByPk(id)
    if (!product) {
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }

    // Actualizar
    await product.update(req.body); // actualizamos el registro, rew.body es para tomar lo que estamos mandando, el cuerpo de lña peticion, update solo actualiza lo que le mandemos
    await product.save(); // guardamos en la DB

    res.json({ data: product })
}

export const updateAvailability = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Product.findByPk(id)
    if (!product) {
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }

    // Actualizar
    product.availability = !product.dataValues.availability; // si está como true lo pondrá en false, y viceversa
    await product.save();
    res.json({ data: product })
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params; // params es lo que mandamos por la url, o sea /:id
    const product = await Product.findByPk(id)
    if (!product) {
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }

    await product.destroy();
    res.json({ data: 'Producto Eliminado' })
    
}