const {Model, DataTypes} =  require('sequelize');

class Product extends Model {
    static init(sequelize) {
        super.init({
            image: DataTypes.STRING,
            name: DataTypes.STRING,
            code: DataTypes.STRING,
            data: DataTypes.STRING,
            price: DataTypes.STRING,
            cashbackporcent: DataTypes.STRING,
            cashbackprice: DataTypes.STRING,
            status: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Product;