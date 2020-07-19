const trim = require('lodash/trim')

class CustomError extends Error {
    constructor(message, extensions) {
        super(message);
        this.extensions = extensions
    }
}

module.exports = (input) => {

    const ex = input.split(':')

    if (ex.length !== 2) {
        throw new Error(`Wrong error format: ${input}`)
    }

    const message = trim(ex[0])
    const description = trim(ex[1])

    return new CustomError(message, {description})
}