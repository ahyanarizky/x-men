'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        power: 'John Doe',
        isBetaMember: false
      }], {});
    */
        return queryInterface.bulkInsert('Skills', [
            {
                power: 'Regeneration',
                level: '0',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                power: 'Laser eye',
                level: '0',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                power: 'Fly',
                level: '0',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                power: 'Thunder',
                level: '0',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                power: 'Fire Storm',
                level: '0',
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
        return queryInterface.bulkDelete('Skills', null, {})
    }
};
