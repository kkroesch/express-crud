var express = require('express')
var router = express.Router()

var People = require('./model')

/* GET users listing. */
router.get('/', (req, res, next) => {

    //res.setHeader('Content-Type', 'application/json');
    People.find((err, people) => {
        if (err) res.send(err)
        res.send(people)
    })
})

router.get('/:username', (req, res, next) => {
    var username = req.params.username;
    People.find({username: username}, (err, people) => {
        if (err) res.send(err)
        res.send(people)
    })
})

router.put('/:username', (req, res, next) => {
    var username = req.params.username;

    People.update({username: username}, req.body, (err, people) => {
        if (err) res.send(err)
        res.send(people)
    })
})

router.delete('/:username', (req, res, next) => {
    var username = req.params.username;
    People.remove({username: username}, (err, people) => {
        if (err) res.send(err)
        res.send(people)
    })
})

router.post('/', (req, res, next) => {
    People.create(req.body, (person) => {
        res.send(person)
    })
})

module.exports = router
