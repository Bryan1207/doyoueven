"use strict";

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password_digest: DataTypes.STRING,
    BMI: DataTypes.STRING,
    userName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //this.hasMany(models.post)
        // associations can be defined here
      }
    }
  });

  return user;
};
