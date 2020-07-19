module.exports = ctx => async ({applicationId, userId}) => {

    await ctx.connection.query('DELETE FROM authorizations WHERE applicationId = ? AND userId = ?', [
        applicationId,
        userId
    ])

    return true
}