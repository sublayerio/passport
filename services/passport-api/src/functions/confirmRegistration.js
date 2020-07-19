const assert = require('./assert')

module.exports = ctx => async ({token}) => {

    const [registration] = await ctx.connection.query('SELECT * FROM sessions WHERE token = ? AND activeId = ?', [
        token,
        'NO'
    ])

    if (!registration) return false

    const [authorization] = await ctx.connection.query('SELECT * FROM authorizations WHERE userId = ? and applicationId = ? LIMIT 1', [
        registration.userId,
        registration.applicationId
    ])

    if (!authorization) {

        await ctx.connection.query('INSERT INTO authorizations SET ?', {
            applicationId: registration.applicationId,
            userId: registration.userId,
            createdAt: new Date()
        })
    }

    await ctx.connection.query('UPDATE sessions SET activeId = ? WHERE token = ? AND activeId = ?', [
        'YES',
        token,
        'NO'
    ])

    return true
}