module.exports = ctx => async ({userId}) => {

    return ctx.connection.query('SELECT applications.* FROM collaborators JOIN applications ON applications.id = collaborators.applicationId WHERE collaborators.userId = ? ORDER BY collaborators.createdAt DESC', [
        userId
    ])
}
