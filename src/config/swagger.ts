//? swagger es para hacer la documentación de nuestra API, este archivo es para hacer toda la configuración
import swaggerJSDoc from 'swagger-jsdoc';
import { SwaggerOptions } from 'swagger-ui-express';

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: 'API Docs for Products'
        }
    },
    apis: ['./src/router.ts'] // direccion de donde va a leer para hacrr la documentacion
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions : SwaggerOptions = { // para cambiar los estilos de la interfaz de swagger
    customCss : `
        .swagger-ui .topbar {
            background-color: #2b3b45
        }
    `,
    customSiteTitle: 'Documentacion REST API Express / TypeScript'
}

export default swaggerSpec
export {
    swaggerUiOptions
}