const mails = require('./../mails')

module.exports = (app) => {

    app.get('/mails/login', (req, res) => {
        const html = mails.login({
            companyName: 'Acme Ltd.',
            email: 'olivier@andev.nl',
            url: 'http://0.0.0.0:3000',
            code: 'Milky Orbit Meteor',
            token: 'token'
        })
        res.send(html)
    })
}