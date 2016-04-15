
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

function setup(app) {

    app.use(require('express-session')({
        secret: '8npi*zf637#vax7hfdqv%hf!0pr2yx!#f9hjde+)0280izr-*t',
        resave: false,
        saveUninitialized: false
    }))
    app.use(passport.initialize())
    app.use(passport.session())

    var Account = require('./model')
    passport.use(new LocalStrategy(Account.authenticate()))
    passport.serializeUser(Account.serializeUser())
    passport.deserializeUser(Account.deserializeUser())

    var routes = require('./routes')
    app.use('/auth', routes)

    return routes
}

module.exports = setup
