const assert = require('./assert')

module.exports = ctx => async ({username, password}) => {

    const [application] = await ctx.connection.query('SELECT * FROM applications WHERE id = ? AND clientSecret = ? LIMIT 1', [
        username,
        password
    ])

    assert(application, 'APPLICATION_NOT_FOUND: Application not found')

    return application
}