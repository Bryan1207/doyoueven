"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("boards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId:{
        type: DataTypes.INTEGER
      }
      name: {
        type: DataTypes.STRING
      },
      Question: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("boards").done(done);
  }
};