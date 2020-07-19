const {GraphQLScalarType} = require('graphql')
const Kind = require('graphql/language/kinds')

module.exports = new GraphQLScalarType({
    name: 'DateTime',
    description: 'An ISO-8601 encoded UTC date string.',
    serialize: (value) => {

        if (!(value instanceof Date)) {
            // Is this how you raise a 'field error'?
            throw new TypeError('Field error: value is not an instance of Date')
        }
        if (isNaN(value.getTime())) {
            throw new TypeError('Field error: value is an invalid Date')
        }
        return value.toJSON()
    },
    parseValue: (value) => {

        var result = new Date(value)

        if (isNaN(result.getTime())) {
            throw new TypeError('Field error: value is not an instance of Date')
        }

        if (value !== result.toJSON()) {
            throw new TypeError('Query error: Invalid date format, only accepts: YYYY-MM-DDTHH:MM:SS.SSSZ', value)
        }

        return result
    },
    parseLiteral: (ast) => {

        if (ast.kind !== Kind.STRING) {
            throw new TypeError('Query error: Can only parse strings to dates but got a: ' + ast.kind, [ast])
        }
        var result = new Date(ast.value)
        if (isNaN(result.getTime())) {
            throw new TypeError('Query error: Invalid date', [ast])
        }
        if (ast.value !== result.toJSON()) {
            throw new TypeError('Query error: Invalid date format, only accepts: YYYY-MM-DDTHH:MM:SS.SSSZ', [ast])
        }
        return result
    }
})