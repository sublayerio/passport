const assert = require('../functions/assert')
const jwt = require('./jwt')

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

    const payload = {
        sub: user.id,
        type: 'user',
        name: user.name ? user.name : user.email,
        email: user.email
    }

    const access_token = await jwt.sign(payload, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })

    return {
        access_token
    }
}