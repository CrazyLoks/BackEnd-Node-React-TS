// import request from 'supertest';
// import server from '../../server';

// describe('POST /api/products', () => {
//     it('should display validation errors', async () => {
//         const response = await request(server).post('/api/products').send({});
//         expect(response.status).toBe(400);
//         expect(response.body).toHaveProperty('errors');

//         expect(response.status).not.toBe(404);
//     })

//     it('should validate that the price is a number and greater than 0', async () => {
//         const response = await request(server).post('/api/products').send({
//             name: 'Monitor curvo Samsung',
//             price: "Hola"
//         });
//         expect(response.status).toBe(400);
//         expect(response.body).toHaveProperty('errors');

//         expect(response.status).not.toBe(404);

//     })
//     it('should create a new product', async () => { // se crea la prueba
//         const response = await request(server).post('/api/products').send({
//             name: "Mouse Gamer - Testing",
//             price: 60
//         })

//         expect(response.status).toEqual(201);
//         expect(response.body).toHaveProperty('data');

//         expect(response.status).not.toBe(404);
//         expect(response.status).not.toBe(200);
//         expect(response.body).not.toHaveProperty('errors');
//     })
// })

// describe('GET /api/products', () => {

//     it('should check if api/products url exists', async () => {
//         const response = await request(server).get('/api/products');
//         expect(response.status).not.toBe(404);
//     })

//     it('GET a JSON response with products', async () => {
//         const response = await request(server).get('/api/products');
//         expect(response.status).toBe(200);
//         expect(response.headers['content-type']).toMatch(/json/);
//         expect(response.body).toHaveProperty('data'); // Que tenga la propiedad 'data', eso significa que si regresó algo

//         expect(response.status).not.toBe(404);
//         expect(response.body).not.toHaveProperty('errors');
//     })
// })

// describe('GET /api/products/:id', () => {
//     it('Should return a 404 response for a non-existent product', async () => {
//         const productId = 2000;
//         const response = await request(server).get(`/api/products/${productId}`); // en esta linea va lo que queremos evaludar, el response, es como nuestra prueba
//         expect(response.status).toBe(404);
//         expect(response.body).toHaveProperty('error');
//         expect(response.body.error).toBe('Producto No Encontrado');
//     })

//     it('Should check a valid ID in the URL', async () => {
//         const response = await request(server).get('/api/products/not-valid-url');
//         expect(response.status).toBe(400);
//         expect(response.body).toHaveProperty('errors');
//         expect(response.body.errors).toHaveLength(1);
//         expect(response.body.errors[0].msg).toBe('ID no válido');
//     })

//     it('GET a JSON response for a single product', async () => {
//         const response = await request(server).get('/api/products/1');
//         expect(response.status).toBe(200);
//         expect(response.body).toHaveProperty('data');
//     })
// })

// describe('PUT /api/products/:id', ()=> {
//     it('Should display validation error messages when updating a product', async () => {
//         const response = await request(server).put('/api/products/1').send({});
//         expect(response.status).toBe(400);
//         expect(response.body).toHaveProperty('errors');
//         expect(response.body.errors).toBeTruthy();
//         expect(response.body.errors).toHaveLength(5);

//         expect(response.status).not.toBe(200);
//         expect(response.body).not.toHaveProperty('data')
//     })

//     it('Should validate that the price is greater than 0', async () => {
//         const response = await request(server)
//             .put('/api/products/1')
//             .send({
//                 name: "Monitor Curvo",
//                 availability: true,
//                 price: 0
//             });
//         expect(response.status).toBe(400);
//         expect(response.body).toHaveProperty('errors');
//         expect(response.body.errors).toBeTruthy();
//         expect(response.body.errors).toHaveLength(1);

//         expect(response.status).not.toBe(200);
//         expect(response.body).not.toHaveProperty('data')
//     })
// })

// describe('DELETE /api/products/:id', () => {
//     it('Should check a valid ID', async () => {
//         const response = await request(server).delete('/api/products/not-valid');
//         expect(response.status).toBe(400);
//         expect(response.body).toHaveProperty('errors');
//         expect(response.body.errors[0].msg).toBe('ID no válido');
//     })

//     it('Should return a 404 response for a non-existent product', async () => {
//         const productId = 2000;
//         const response = await request(server).delete(`/api/products/${productId}`);
//         expect(response.status).toBe(404);
//         expect(response.body.error).toBe('Producto No Encontrado');
//     })

//     it('Should delete a product', async () => {
//         const response = await request(server).delete('/api/products/1');
//         expect(response.status).toBe(200);
//         expect(response.body.data).toBe('Producto Eliminado');

//         expect(response.status).not.toBe(404);
//         expect(response.status).not.toBe(400);
//     })
// })

// describe('PATCH /api/products/:id', () => {
//     it('Should return a 404 response for a non-existing product', async () => {
//         const productId = 2000;
//         const response = await request(server).patch(`/api/products/${productId}`);
//         expect(response.status).toBe(404);
//         expect(response.body.error).toBe('Producto No Encontrado');
//         expect(response.status).not.toBe(200);
//         expect(response.body).not.toHaveProperty('data')
//     })
// })