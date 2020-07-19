const random = require('lodash/random')

module.exports = () => ([
    random(0, 9),
    random(0, 9),
    random(0, 9),
    ' ',
    random(0, 9),
    random(0, 9),
    random(0, 9),
]).join('')