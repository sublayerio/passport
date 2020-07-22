const assert = require('./assert')

module.exports = ctx => async ({id, applicationId}) => {

    const [session] = await ctx.connection.query('SELECT * FROM sessions WHERE id = ? AND applicationId = ?LIMIT 1', [
        id,
        applicationId
    ])

    assert(session, 'SESSION_NOT_FOUND: Session not found')

    assert(!session.used, 'SESSION_ALREADY_USED: Session already used')

    // await ctx.connection.query('UPDATE sessions SET used = ? WHERE id = ? AND applicationId = ?', [
    //     1,
    //     id,
    //     applicationId
    // ])

    return session
}