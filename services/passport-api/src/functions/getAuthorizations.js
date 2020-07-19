module.exports = ctx => async ({userId}) => {

    const authorizations = await ctx.connection.query('SELECT * FROM authorizations WHERE userId = ? ORDER BY createdAt DESC', [
        userId
    ])

    return authorizations
}