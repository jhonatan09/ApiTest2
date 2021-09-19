const User = require('../models/User');

module.exports = {

    async searchOne(request, response) {
        const {email, password} = request.headers;

        const userFind = await User.findOne({
            where: {email, password}
        })

        return response.json(userFind);
    },



    async criacao(request, response) {
        const {name, email, password, cpf} = request.body;

        const user = await User.create({name, email, password, cpf});

        return response.json(user);
    }
}