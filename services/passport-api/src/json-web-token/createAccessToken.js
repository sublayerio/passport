const sign = require('./sign')

module.exports = ctx => async (payload) => {
    
    return sign(ctx)(payload, {
        expiresIn: ctx.env.JWT_EXPIRES_IN
    })
}