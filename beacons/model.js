
var mongoose = require('mongoose');

var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;
