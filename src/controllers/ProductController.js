const Product = require('../models/Product');

module.exports = {

    async searchAll(request, response) {
        
        const products = await Product.findAll()

        return response.json(products);
    },



    async criacao(request, response) {
        const {image, name, code, data, price, status, cashbackporcent, cashbackprice} = request.body;

        const product = await Product.create({image, name, code, data, price, status, cashbackporcent, cashbackprice});

        return response.json(product);
    }
}