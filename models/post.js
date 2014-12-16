"use strict";

module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define("post", {
    username: DataTypes.STRING,
    content: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        this.belongsTo(model.board);
        this.belongsTo(model.user);
        // associations can be defined here
      }
    }
  });

  return post;
};
