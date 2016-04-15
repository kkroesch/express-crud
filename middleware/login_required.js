
/**
 * Login redirect to protect routes.
 *
 * @returns {Function} Middleware
 */

module.exports = (req, res, next) => {
    if (! req.user) {
        req.session.next_page = req.originalUrl
        res.redirect('/auth/login')
    }
    else
        next()
}
