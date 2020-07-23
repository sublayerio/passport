const uuid = require('uuid')
const assert = require('../functions/assert')
const jwt = require('./jwt')

module.exports = ctx => async ({ code }) => {

    console.log('createRefreshToken')

    const [session] = await ctx.db.query('SELECT * FROM sessions WHERE id = ?', [
        code
    ])

    assert(session, 'SESSION_NOT_FOUND: Session not found')

    const refresh_token = uuid.v4()

    await ctx.db.query('UPDATE sessions SET refreshToken = ?, used = ? WHERE id = ?', [
        refresh_token,
        1,
        code
    ])

    const [user] = await ctx.db.query('SELECT * FROM users WHERE id = ?', [
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
        refresh_token,
        access_token
    }
}