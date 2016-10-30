'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mutant = sequelize.define('Mutant', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Mutant;
};