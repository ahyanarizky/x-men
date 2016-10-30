'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
        return queryInterface.bulkInsert('MutantSkills', [
            {
                MutantId: 12,
                SkillId: 3,
                level: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                MutantId: 12,
                SkillId: 5,
                level: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                MutantId: 15,
                SkillId: 3,
                level: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                MutantId: 10,
                SkillId: 2,
                level: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                MutantId: 12,
                SkillId: 1,
                level: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})

    },

    down: function(queryInterface, Sequelize) {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
        return queryInterface.bulkDelete('MutantSkills', null, {})

    }
};
