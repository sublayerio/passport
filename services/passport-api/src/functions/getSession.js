const assert = require('./assert')

module.exports = ctx => async ({id}) => {

    const [session] = await ctx.connection.query('SELECT * FROM sessions WHERE id = ? LIMIT 1', [
        id
    ])

    assert(session, 'SESSION_NOT_FOUND: Session not found')

    return session
}