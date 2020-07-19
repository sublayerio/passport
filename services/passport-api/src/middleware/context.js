const createConnection = require('../services/createConnection')
const Emittery = require('emittery')

module.exports = (req, res, next) => {

    const ctx = {}

    ctx.events = new Emittery()
    
    ctx.connection = createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT
    })
    
    ctx.connection.connect()

    ctx.events.on('destroy', async () => {
        await ctx.connection.end()
        console.log('ended connection')
    })

    res.on('finish', () => {
        ctx.events.emit('destroy')
    })

    ctx.req = req
    ctx.env = process.env
    req.ctx = ctx

    next()
}