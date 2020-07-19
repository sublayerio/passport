module.exports = ctx => async ({id, input}) => {

    const {
        name,
        privacyPolicyUrl,
        termsOfServiceUrl,
        supportEmail,
        brandImageUrl
    } = input

    await ctx.connection.query('UPDATE applications SET ? WHERE id = ?', [
        {
            name,
            privacyPolicyUrl,
            termsOfServiceUrl,
            supportEmail,
            brandImageUrl
        },
        id
    ])

    const [application] = await ctx.connection.query('SELECT * FROM applications WHERE id = ? LIMIT 1', [
        id
    ])

    return application
}