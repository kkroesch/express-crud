
function setup(app) {

    var validator = require('../middleware/validator')('../people/People.json')
    app.use('/people', validator)

    var routes = require('./routes')
    app.use('/people', routes)

    return routes
}

module.exports = setup
