const jwt = require('../jwt')

module.exports = ctx => async user => {

    const roles = await ctx.db.query('SELECT roles.id FROM roles LEFT JOIN groups_roles ON roles.id = groups_roles.roleId LEFT JOIN users_groups ON groups_roles.groupId = users_groups.groupId WHERE users_groups.userId = ?', [
        user.id
    ])

    const payload = {
        sub: user.id,
        type: 'user',
        name: user.name ? user.name : user.email,
        email: user.email,
        roles: roles.map(role => role.id)
    }

    return jwt.sign(payload, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}