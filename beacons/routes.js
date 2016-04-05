var express = require('express');
var router = express.Router();

var Kitten = require('./model');

/* GET users listing. */
router.get('/', function(req, res, next) {

    //res.setHeader('Content-Type', 'application/json');
    Kitten.find(function (err, kittens) {
        if (err) res.send(err);
        res.send(kittens);
    });

});

module.exports = router;
