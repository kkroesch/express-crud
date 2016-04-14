
var mongoose = require('mongoose');

var peopleSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    organization: String,
    affiliation: String,
    email: String,
    username: String
});

module.exports = mongoose.model('People', peopleSchema);
