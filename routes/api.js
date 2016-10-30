var express = require('express');
var router = express.Router();
var models = require('../models')
var mutan = models.Mutant
var skill = models.Skill
/* GET users listing. */
//read all mutant
router.get('/', function(req, res, next) {
    mutan.findAll({order: ['id']}).then((data) => {
        res.json(data)
    })
});

router.post('/', function(req, res, next) {
    mutan.create({name: req.body.name}).then((data) => {
        res.json(data)
    })
});

router.put('/:id', function(req, res, next) {
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

router.delete('/:id', function(req, res, next) {
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

module.exports = router;
