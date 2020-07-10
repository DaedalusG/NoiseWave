'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    songId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {});
  Like.associate = function (models) {
    // associations can be defined here
    Like.belongsTo(models.User, { foreignKey: 'userId' });
    Like.belongsTo(models.Song, { foreignKey: 'songId' });
  };
  return Like;
};