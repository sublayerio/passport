const getUser = require('./getUser')
const verify = require('../json-web-token/verify')

module.exports = (ctx) => async ({token}) => {

    const decoded = await verify(ctx)(token)

    if (!decoded) {
        return
    }

    return getUser(ctx)({
        id: decoded.sub
    })
}