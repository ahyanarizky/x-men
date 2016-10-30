var express = require('express');
var router = express.Router();
var models = require('../models')
var mutan = models.Mutant
var skill = models.Skill
var mutanSkill = models.MutantSkill
/* GET users listing. */
//read all mutant
router.get('/mutants', function(req, res, next) {
    mutan.findAll({order: ['id']}).then((data) => {
        res.json(data)
    })
});

router.post('/mutants', function(req, res, next) {
    mutan.create({name: req.body.name}).then((data) => {
        res.json(data)
    })
});

router.put('/mutants/:id', function(req, res, next) {
    mutan.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        data.update({name: req.body.name}).then((result) => {
            res.json(result)
        })
    })
})

router.delete('/mutants/:id', function(req, res, next) {
    mutan.destroy({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        if (data > 0) {
            res.json({message: 'Delete successfully'})
        } else {
            res.json({message: 'ID not found'})
        }
        res.json(data)
    })
})

router.get('/skills', function(req, res, next) {
    skill.findAll({order: ['id']}).then((data) => {
        res.json(data)
    })
});

router.post('/skills', function(req, res, next) {
    skill.create({power: req.body.power, level: req.body.level}).then((data) => {
        res.json(data)
    })
});

router.put('/skills/:id', function(req, res, next) {
    skill.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        data.update({power: req.body.power, level: req.body.level}).then((result) => {
            res.json(result)
        })
    })
})

router.delete('/skills/:id', function(req, res, next) {
    skill.destroy({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        if (data > 0) {
            res.json({message: 'Delete successfully'})
        } else {
            res.json({message: 'ID not found'})
        }
        res.json(data)
    })
})

router.get('/mutantskill', function(req, res, next) {
    mutanSkill.findAll({}).then((data) => {
        res.json(data)
    })
})

router.post('/mutantskill', function(req, res, next) {
    mutanSkill.create({MutantId: req.body.MutantId, SkillId: req.body.SkillId, level: req.body.level}).then((data) => {
        res.json(data)
    })
})

router.get('/mutantpower/:id', function(req, res, next) {})

module.exports = router;
