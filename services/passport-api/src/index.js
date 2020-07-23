const app = require('./app')
const pkg = require('../package.json')
const dotenv = require('dotenv')
dotenv.config()

const moment = require('moment/moment')

moment.locale('nl')

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0'

app.listen(PORT, HOST, () => {
    console.log(`${pkg.name}:${pkg.version} listening on ${HOST}:${PORT}`)
})