var should = require("should");
var mongoose = require('mongoose');
var Account = require("../model");
var db;

const settings = require('../../config')

describe('Account', function() {

    before((done) => {
        db = mongoose.connection  // should already be opened by started app
        done();
    })

    beforeEach((done) => {
        var account = new Account({
            username: 'testuser',
            password: 'aaa'
        });

        account.save((error) => {
            if (error)
                console.log('error' + error.message)
            done();
        });
    });

    it('find a user by username', (done) => {
        Account.findOne({ username: 'testuser' }, (err, account) => {
            account.username.should.eql('testuser');
            console.log("   username: ", account.username);
            done();
        });
    });

    afterEach((done) => {
        //Account.remove({}, () => {
            done()
        //})
    })

})
