const assert = require('../functions/assert')
const createAccessToken = require('./utils/createAccessToken')

module.exports = ctx => async ({ refresh_token }) => {

    console.log('createAccessToken', refresh_token)

    const [session] = await ctx.db.query('SELECT * FROM sessions WHERE refreshToken = ?', [
        refresh_token
    ])

    assert(session, 'SESSION_NOT_FOUND: Session not found')

    await ctx.db.query('UPDATE sessions SET lastUsedAt = ? WHERE refreshToken = ?', [
        new Date(),
        refresh_token
    ])

    const [user] = await ctx.db.query('SELECT * FROM users WHERE id = ?', [
        session.userId
    ])

    await ctx.db.query('UPDATE users SET lastActiveAt = ? WHERE id = ?', [
        new Date(),
        session.userId
    ])

    const access_token = await createAccessToken(ctx)(user)

    return {
        access_token
    }
}