var express = require('express');
var router = express.Router();
var controller = require('../controller/controller')
/* GET users listing. */
//read all mutant
router.get('/mutants', controller.getAllMutants);
router.post('/mutants', controller.createNewMutant);
router.put('/mutants/:id', controller.reconstructMutant)
router.delete('/mutants/:id', controller.eliminateMutant)

router.get('/skills', controller.getAllSkills);
router.post('/skills', controller.developNewSkill);
router.put('/skills/:id', controller.reconstructSkill)
router.delete('/skills/:id', controller.eliminateSkill)

router.get('/mutantskill/:id', controller.showMutantSkills)
router.post('/mutantskill', controller.trainMutant)

router.get('/mutantpower/:id', function(req, res, next) {})

module.exports = router;
