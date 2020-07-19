const createError = require('./createError')

module.exports = (condition, error) => {

    // define here so that it always
    // get's validated
    const e = createError(error)

    if (!condition) {
        throw e
    }
}