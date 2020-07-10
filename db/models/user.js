'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    profilePicUrl: {
      type: Sequelize.STRING(255)
    },
    backgroundUrl: {
      type: Sequelize.STRING(255)
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Song, { foreignKey: 'userId' });
    User.hasMany(models.Comment, { foreignKey: 'userId' });
    User.hasMany(models.Like, { foreignKey: 'userId' });
  };
  return User;
};