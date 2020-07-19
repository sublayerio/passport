const createAccessToken = require('../json-web-token/createAccessToken')
const toDisplayName = require('./toDisplayName')

module.exports = ctx => async (user) => {

    const payload = {
        sub: user.id,
        name: toDisplayName(user),
        email: user.email
    }

    return createAccessToken(ctx)(payload)
}