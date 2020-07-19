const assert = require('./assert')

module.exports = ctx => async ({id}) => {

    const [session] = await ctx.connection.query('SELECT * FROM users WHERE id = ? LIMIT 1', [
        id
    ])

    assert(session, 'USER_NOT_FOUND: User not found')

    return session
}