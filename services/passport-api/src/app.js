const path = require('path')
const requestId = require('request-ip')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const middleware = require('./middleware')
const mailExamples = require('./routes/mailExamples')
const pkg = require('../package.json')
const bodyParser = require('body-parser')

console.log('COMPANY_PRIMARY_COLOR', process.env.COMPANY_PRIMARY_COLOR)

const createConnection = require('./database/createConnection')
const createSchema = require("./sdk/schema/createSchema")({
    configPath: path.join(__dirname, 'schema.yaml')
})

const schema = createSchema()()

const createContext = async () => {

    const db = createConnection({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    })

    return {
        db,
        schema,
        destroy: async () => {
            await db.destroy()   
        }
    }
}

const handle = require('./sdk/http/handle')({ createContext })

const getRecords = require('./sdk/model/getRecords')
const getRecord = require('./sdk/model/getRecord')
const getComponent = require('./sdk/model/getComponent')

const createRefreshToken = require('./passport/createRefreshToken')
const createAccessToken = require('./passport/createAccessToken')

const app = express()

mailExamples(app)

app.use(cors())

app.use(requestId.mw())

app.use(morgan('tiny'))

app.post("/v0/refresh-token/create", bodyParser.json(), handle(createRefreshToken))
app.post("/v0/access-token/create", bodyParser.json(), handle(createAccessToken))

app.get("/v0/schema", handle(ctx => () => ctx.schema))

app.get("/v0/records/:modelId", handle(getRecords));

app.get("/v0/record/:modelId/:recordId", handle(getRecord));

app.post("/v0/component/has-many", bodyParser.json(), handle(getComponent));

app.get('/', (req, res) => {

    res.json({
        name: pkg.name,
        version: pkg.version
    })

})

app.use('/v0', middleware.cors, middleware.context, middleware.auth, middleware.graphql)

module.exports = app