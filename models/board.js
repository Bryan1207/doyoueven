"use strict";

module.exports = function(sequelize, DataTypes) {
  var board = sequelize.define("board", {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //this.hasMany(models.posts);
        // associations can be defined here
      }
    }
  });

  return board;
};
