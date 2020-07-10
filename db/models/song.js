'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
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
      allowNull: false
    }
  }, {});
  Song.associate = function (models) {
    // associations can be defined here
    Song.belongsTo(models.User, { foreignKey: 'userId' });
    Song.hasMany(models.Like, { foreignKey: 'songId' });
    Song.hasMany(models.Comment, { foreignKey: 'songId' });
  };
  return Song;
};