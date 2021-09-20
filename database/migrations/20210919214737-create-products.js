'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('products', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        code: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        price: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cashbackporcent: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cashbackprice: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('products');
  }
};
