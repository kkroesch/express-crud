
var validator = require('is-my-json-valid/require');

/**
 * Validation middleware for JSON schema.
 *
 * @param schema Must be a file path to a validation schema.
 * @returns {Function} Middleware
 */
function setup(schema) {

    return function(req, res, next) {

        if (req.method != 'POST' && req.method != 'PUT' && req.method != 'PATCH') {
            next()
            return
        }

        var validate = validator(schema)

        if (! validate(req.body))
            res.status(400).send(validate.errors)
        else
            next()
    }
}

module.exports = setup
