const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const middleware = require('./middleware')
const mailExamples = require('./routes/mailExamples')
const pkg = require('../package.json')

const app = express()

mailExamples(app)

app.use(cors())

app.use(morgan('tiny'))

app.get('/', (req, res) => {

    res.json({
        name: pkg.name,
        version: pkg.version
    })

})

app.use('/v0', middleware.cors, middleware.context, middleware.auth, middleware.graphql)

module.exports = app