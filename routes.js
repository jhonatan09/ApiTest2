const express = require('express');

const UserController = require('./controllers/UserController')

const ProductController = require('./controllers/ProductController')

const routes = express.Router();


routes.get('/', (req, res) => {
 return res.json({ message: "server on!"});
});

routes.post('/users', UserController.criacao);
routes.get('/users', UserController.searchOne);

routes.post('/products', ProductController.criacao);
routes.get('/products', ProductController.searchAll);

module.exports = routes;