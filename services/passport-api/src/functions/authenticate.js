const getUser = require('./getUser')
const getSessionForApplication = require('./getSessionForApplication')
const getTokenForUser = require('./getTokenForUser')

module.exports = ctx => async ({code}) => {

    const session = await getSessionForApplication(ctx)({
        id: code,
        applicationId: ctx.env.SUBLAYER_PASSPORT_CLIENT_ID
    })

    const user = await getUser(ctx)({
        id: session.userId
    })

    return getTokenForUser(ctx)(user)
}