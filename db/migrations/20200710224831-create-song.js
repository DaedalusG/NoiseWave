'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      artist: {
        type: Sequelize.STRING(100)
      },
      album: {
        type: Sequelize.STRING(100)
      },
      genre: {
        type: Sequelize.STRING(100)
      },
      songUrl: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      thumbnailUrl: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Songs');
  }
};