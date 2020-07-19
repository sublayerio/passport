const rateLimit = require('express-rate-limit')

/**
 * todo optimize
 * This feature could be optimized by storing the limit per ip in a different
 * store
 */
module.exports = rateLimit({
    windowMs: 1000, // 1 second
    max: 5
})
