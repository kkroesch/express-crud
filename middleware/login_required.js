
/**
 * Validation middleware for JSON schema.
 *
 * @param schema Must be a file path to a validation schema.
 * @returns {Function} Middleware
 */
function setup() {

    return function(req, res, next) {
        req.original_path = req.path
        res.redirect('/auth/login')
    }
}

module.exports = setup
