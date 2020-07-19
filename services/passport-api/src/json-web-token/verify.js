const jwt = require('jsonwebtoken')

module.exports = ctx => async (encoded) => {

    return new Promise(resolve => {

        jwt.verify(encoded, ctx.env.JWT_SECRET, (err, decoded) => {

            if (err) {
                resolve(false)
                return
            }

            resolve(decoded)
        })
    })
}