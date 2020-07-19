const getSession = require('../functions/getSession')
const getApplicationForCredentials = require('../functions/getApplicationForCredentials')
const getUserForToken = require('../functions/getUserForToken')
const getTokenForUser = require('../functions/getTokenForUser')

const extractTokenFromHeaders = (headers) => {
    const {authorization} = headers
    if (!authorization) return null
    const parts = authorization.split(' ')
    if (parts.length !== 2) return null
    if (parts[0] !== 'Bearer') return null
    // if (globalId.isOfType('key', parts[1]) === false) return null
    return parts[1]
}

const getCredentials = input => {
    try {
        input = Buffer.from(input, 'base64').toString('ascii')
        input = input.split(':')
        return {
            username: input[0],
            password: input[1],
        }

    } catch (e) {
        //
    }
}

module.exports = async (req, res, next) => {

    const token = extractTokenFromHeaders(req.headers)

    const credentials = getCredentials(token)

    if (!credentials) {
        return next()
    }

    const {username, password} = credentials

    if (username === 'session') {

        const user = await getUserForToken(req.ctx)({
            token: password
        })

        if (user) {
            req.ctx.authType = 'session'
            req.ctx.userId = user.id

            const newToken = await getTokenForUser(req.ctx)(user)

            res.set('X-Token', newToken)
            res.set('Access-Control-Expose-Headers', 'X-Token')

            console.log(`[authenticated] id: ${user.id}, email: ${user.email}`)
        }
    } else {

        const application = await getApplicationForCredentials(req.ctx)({
            username: credentials.username,
            password: credentials.password
        })

        if (application) {
            req.ctx.authType = 'application'
            req.ctx.applicationId = application.id
        }
    }

    next()
}