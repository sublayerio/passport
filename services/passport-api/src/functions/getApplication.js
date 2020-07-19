const assert = require('./assert')

module.exports = ctx => async ({id}) => {

    const [client] = await ctx.connection.query('SELECT * FROM applications WHERE id = ? LIMIT 1', [
        id
    ])

    assert(client, 'APPLICATION_NOT_FOUND: Application not found')

    return client
}