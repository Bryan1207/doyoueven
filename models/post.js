"use strict";

module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define("post", {
    username: DataTypes.STRING,
    content: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //this.belongsTo(models.board);
        //this.belongsTo(models.user);
        // associations can be defined here
      }
    }
  });

  return post;
};
