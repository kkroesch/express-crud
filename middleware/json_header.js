/**
 * Sets header to application/json.
 *
 * @returns {Function} Middleware
 */

module.exports = function (req, res, next) {
    res.setHeader('Content-Type', 'application/json')
    next()
}
