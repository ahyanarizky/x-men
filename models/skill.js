'use strict';
module.exports = function(sequelize, DataTypes) {
    var Skill = sequelize.define('Skill', {
        power: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Skill.belongsToMany(models.Mutant, {
                    through: 'MutantSkill',
                    foreignKey: 'SkillId'
                })
            }
        }
    });
    return Skill;
};
