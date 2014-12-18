"use strict";

var bcrypt = require("bcrypt");
var passport = require("passport");
var passportLocal = require("passport-local");
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: DataTypes.INTEGER
      // },
      // email: {
      //   type: DataTypes.STRING
      // },
      // firstName: {
      //   type: DataTypes.STRING
      // },
      // lastName: {
      //   type: DataTypes.STRING
      // },
      // password_digest: {
      //   type: DataTypes.STRING
      // },
      // BMI: {
      //   type: DataTypes.STRING
      // },
      // userName: {
      //   type: DataTypes.STRING
      // },
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    email: DataTypes.STRING,
    password_digest: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    BMI: DataTypes.STRING,
    userName: DataTypes.STRING
  }, {
    instanceMethods: {
      checkPassword: function (password) {
        return bcrypt.compareSync(password, this.password_digest);
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // this.hasMany(models.user);
      },
      findByEmail: function (email) {
        return this.find({
          where: {
            email: email
          }
        });
      },
      encryptPassword: function (password) {
        var salt = bcrypt.genSaltSync(13);
        var hash = bcrypt.hashSync(password, salt);
        return hash;
      },
      createSecure: function (email, password, error, success) {
        var hash = this.encryptPassword(password);
        this.create({
          email: email,
          password_digest: hash
        })
        .then(function (user) {
          console.log("YES!!")
          success(null, user, {message: "logged in"});
         },
        function (err) {
          console.log("Whatt?")
          console.log(arguments)
          console.log(err)
          error(null, false, {message: "something went wrong"});
        });
      },
      authenticate: function (email, password, done) {
        this.findByEmail(email)
        .then(function (user) {
          if (user.checkPassword(password)) {
            done(null, user);
          } else {
            done(null, false, {message: "oops"});
          }
        },
        function (err) {
            done(err)
        })
      }
    }
  });
  passport.use(new passportLocal.Strategy(
    {
      usernameField: 'user[email]',
      passwordField: 'user[password]',
      passReqToCallback : true
    },
    function (req, email, password, done) {
      console.log("Authenticating");
      user.authenticate(email, password, done);
    }
  ))
  return user;
};
