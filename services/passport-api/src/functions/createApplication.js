const assert = require('./assert')
const globalId = require('./globalId')

module.exports = ctx => async ({input, userId}) => {

    const {
        name,
        privacyPolicyUrl,
        termsOfServiceUrl,
        supportEmail,
        brandImageUrl
    } = input

    const id = globalId.generate('app')
    const clientSecret = globalId.generate('sec')

    await ctx.connection.query('INSERT INTO applications SET ?', {
        id,
        name,
        privacyPolicyUrl,
        termsOfServiceUrl,
        supportEmail,
        brandImageUrl,
        clientSecret,
        createdAt: new Date()
    })

    await ctx.connection.query('INSERT INTO collaborators SET ?', {
        applicationId: id,
        userId,
        createdAt: new Date()
    })

    const [application] = await ctx.connection.query('SELECT * FROM applications WHERE id = ? LIMIT 1', [
        id
    ])

    assert(application, 'APPLICATION_NOT_FOUND: Application not found')

    return application
}