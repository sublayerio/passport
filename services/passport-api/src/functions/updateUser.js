const assert = require('./assert')

module.exports = ctx => async ({id, input}) => {

    const {firstName, lastName} = input

    const [user] = await ctx.connection.query('SELECT * FROM users WHERE id = ? LIMIT 1', [
        id
    ])

    assert(user, 'USER_NOT_FOUND: User not found')

    await ctx.connection.query('UPDATE users SET ? WHERE id = ?', [
        {
            firstName,
            lastName
        },
        id
    ])

    const [updatedUser] = await ctx.connection.query('SELECT * FROM users WHERE id = ? LIMIT 1', [
        id
    ])

    return updatedUser
}