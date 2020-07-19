const {formatError} = require('graphql')
const {makeExecutableSchema} = require('graphql-tools')
const server = require('express-graphql')
const addScalarTypes = require('./../scalarTypes')
const resolvers = require('./../resolvers')
const fs = require('fs')
const typeDefs = fs.readFileSync(__dirname + '/../typeDefs.graphql', 'utf-8')

const schema = addScalarTypes(makeExecutableSchema({
    typeDefs,
    resolvers
}))

module.exports = (req, res) => server({
    schema,
    context: req.ctx,
    graphiql: true,
    customFormatErrorFn: (value) => {
        return formatError(value)
    }
})(req, res)