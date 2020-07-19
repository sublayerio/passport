const {GraphQLScalarType} = require('graphql')

module.exports = new GraphQLScalarType({
    name: 'Mixed',
    serialize: value => value,
    parseValue: value => value,
    parseLiteral(ast) {
        return ast.value
    }
})