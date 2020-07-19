module.exports = ctx => async ({id}) => {

    await ctx.connection.query('DELETE FROM applications WHERE id = ?', [
        id
    ])

    await ctx.connection.query('DELETE FROM collaborators WHERE applicationId = ?', [
        id
    ])

    return true
}