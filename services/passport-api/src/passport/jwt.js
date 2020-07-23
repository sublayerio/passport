const jwt = require('jsonwebtoken')

const sign = async (payload, { expiresIn }) => {

    payload = {
        iss: process.env.JWT_ISS,
        aud: process.env.JWT_AUD,
        ...payload
    }

    return new Promise((resolve, reject) => {

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn }, (err, result) => {

            if (err) {
                reject(err)
                return
            }

            resolve(result)
        })
    })
}

const verify = async (encoded) => {

    return new Promise(resolve => {

        jwt.verify(encoded, process.env.JWT_SECRET, { algorithms: ["HS256"] }, (err, decoded) => {

            if (err) {
                console.log(err)
                resolve(false)
                return
            }

            resolve(decoded)
        })
    })
}

module.exports = {
    sign,
    verify
}