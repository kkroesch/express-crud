var tobi = require('tobi'),
    browser = tobi.createBrowser(3000, 'localhost')

browser.get('/auth/login', (res, $) => {

    $('form')
        .fill({ username: 'msalt', password: 'aaa' })
        .submit((res, $) => {
            res.should.have.status(200);
            res.should.have.header('Content-Length');
            res.should.have.header('Content-Type', 'text/html; charset=utf-8');

            $('body').should.have.one('p', 'You are currently logged in as msalt');
        })
})