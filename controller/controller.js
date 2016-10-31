'use strict'

let showMutantSkills = function(MutantId) {}

module.exports = {
    getAllMutants: function(req, res, next) {
        mutan.findAll({order: ['id']}).then((data) => {
            res.json(data)
        })
    },
    createNewMutant: function(req, res, next) {
        mutan.create({name: req.body.name}).then((data) => {
            res.json(data)
        })
    },
    reconstructMutant: function(req, res, next) {
        mutan.findOne({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            data.update({name: req.body.name}).then((result) => {
                res.json(result)
            })
        })
    },
    eliminateMutant: function(req, res, next) {
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
    },
    getAllSkills: function(req, res, next) {
        skill.findAll({order: ['id']}).then((data) => {
            res.json(data)
        })
    },
    developNewSkill: function(req, res, next) {
        skill.create({power: req.body.power, level: req.body.level}).then((data) => {
            res.json(data)
        })
    },
    reconstructSkill: function(req, res, next) {
        skill.findOne({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            data.update({power: req.body.power, level: req.body.level}).then((result) => {
                res.json(result)
            })
        })
    },
    eliminateSkill: function(req, res, next) {
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
    },
    showMutantSkills: function(req, res, next) {
        mutan.findAll({
            include: [
                {
                    model: skill,
                    through: {
                        // atttributes: ['power'],
                        where: {
                            MutantId: req.params.id
                        }
                    }
                }
            ]
        }).then((data) => {
            for (var i = 0; i < data.length; i++) {
                if (data[i].dataValues.id == req.params.id) {
                    res.json(data[i].dataValues)
                } else {}
            }
        })
    },
    trainMutant: function(req, res, next) {
        mutanSkill.create({MutantId: req.body.MutantId, SkillId: req.body.SkillId, level: req.body.level}).then((data) => {
            res.json(data)
        })
    }

}
