'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('commitmentTypes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      }
    },
    {
      charset: 'utf8'
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('commitmentTypes');
  }
};
