var request = require('supertest')

var server = require('../../testserver')

describe('Testing People CRUD API', () => {

    it('saves a sample user', (done) => {
        var user = require('./fixtures.json')
        request(server)
            .post('/people')
            .send(user)
            .expect(201, done)
    })

    it('lists /people', (done) => {
        request(server)
            .get('/people')
            .expect(200)
            .end((err, res) => {
                res.body[0].username.should.equal('msalt')
                done()
            })
    })

    it('rejects an invalid user data', (done) => {
        var user = require('./fixture-fail.json')
        request(server)
            .post('/people')
            .send(user)
            .expect(400, done)
    })

    it('deletes the user', (done) => {
        request(server)
            .delete('/people/msalt')
            .expect(200, done)
    })
})