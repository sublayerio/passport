const assert = require('./assert')

module.exports = ctx => async ({id}) => {

    const [registration] = await ctx.connection.query('SELECT * FROM sessions WHERE registrationId = ? AND activeId = ? LIMIT 1', [
        id,
        'YES'
    ])

    assert(registration, 'REGISTRATION_NOT_VERIFIED: Registration not verified')

    return registration
}