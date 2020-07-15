"use strict";
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    "Song",
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      artist: {
        type: DataTypes.STRING(100),
      },
      album: {
        type: DataTypes.STRING(100),
      },
      genre: {
        type: DataTypes.STRING(100),
      },
      songUrl: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {}
  );
  Song.associate = function (models) {
    // associations can be defined here
    Song.belongsTo(models.User, { foreignKey: "userId" });
    Song.hasMany(models.Like, { foreignKey: "songId" });
    Song.hasMany(models.Comment, { foreignKey: "songId" });
  };
  return Song;
};
