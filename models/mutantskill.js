'use strict';
module.exports = function(sequelize, DataTypes) {
    var MutantSkill = sequelize.define('MutantSkill', {
        MutantId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Mutants',
                key: 'Id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        SkillId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Skills',
                key: 'Id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        level: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return MutantSkill;
};
