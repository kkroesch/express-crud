var request = require('supertest')

var server = require('../../testserver')

describe('Testing People CRUD API', () => {

    it('responds to /people', (done) => {
        request(server)
            .get('/people')
            .expect(200)
            .end((err, body) => {
                done()
            })
    });

    it('loads a sample user', (done) => {
        var user = require('./fixtures.json')
        request(server)
            .post('/people')
            .send(user)
            .expect(201, done)
    })

    it('deletes the user', (done) => {
        request(server)
            .delete('/people/msalt')
            .expect(200, done)
    })

    it('404 everything else', (done) => {
        request(server)
            .get('/peoples')
            .expect(404, done)
    });
});