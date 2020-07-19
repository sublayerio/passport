const jwt = require('jsonwebtoken')

module.exports = ctx => async ({sub, name}, {expiresIn}) => {

    const payload = {
        iss: ctx.env.JWT_ISS,
        aud: ctx.env.JWT_AUD,
        sub,
        name
    }

    return new Promise((resolve, reject) => {

        jwt.sign(payload, ctx.env.JWT_SECRET, {expiresIn}, (err, result) => {

            if (err) {
                reject(err)
                return
            }

            resolve(result)
        })
    })
}