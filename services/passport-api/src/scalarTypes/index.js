const GraphQLJSON = require('graphql-type-json')
const GraphQLMixed = require('./Mixed')
const GraphQLDateTime = require('./DateTime')

module.exports = (schema) => {

    Object.assign(schema._typeMap.JSON, {
        name: 'JSON',
        serialize: value => value,
        parseValue: value => value,
        parseLiteral: GraphQLJSON.parseLiteral,
    })

    Object.assign(schema._typeMap.Mixed, GraphQLMixed)
    Object.assign(schema._typeMap.DateTime, GraphQLDateTime)
    return schema
}