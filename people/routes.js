var express = require('express')
var router = express.Router()

var People = require('./model')

router.get('/', (req, res, next) => {

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
        res.status(201).end(person)
    })
})

module.exports = router
