var express = require('express')
var passport = require('passport')
var Account = require('./model')
var router = express.Router()

router.get('/register', (req, res) => {
    res.render('register', { })
})

router.post('/register', (req, res) => {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account , error: err.message})
        }

        passport.authenticate('local')(req, res, () => {
            res.redirect('/')
        })
    })
})

router.get('/login', (req, res) => {
    console.log("User wants to " + req.session.next_page)
    res.render('login', { user : req.user })
})

router.post('/login', passport.authenticate('local'), (req, res) => {
    if (req.session.next_page)
        res.redirect(req.session.next_page)
    else
        res.redirect('/')
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

router.get('/ping', (req, res) => {
    res.status(200).send("pong!")
})

module.exports = router
