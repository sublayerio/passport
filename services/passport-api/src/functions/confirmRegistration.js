const moment = require('moment/moment')
const assert = require('./assert')

module.exports = ctx => async ({ token }) => {


    const [login] = await ctx.connection.query('SELECT * FROM logins WHERE token = ? LIMIT 1', [
        token
    ])

    if (!login) {
        return {
            application: null,
            status: 'TOKEN_NOT_FOUND'
        }
    }

    const [{ email }] = await ctx.connection.query('SELECT email FROM users WHERE id = ?', [
        login.userId
    ])

    const [application] = await ctx.connection.query('SELECT * FROM applications WHERE id = ?', [
        login.applicationId
    ])

    if (login.state === 'VERIFIED') {
        return {
            application,
            email,
            status: 'ALREADY_VERIFIED'
        }
    }

    if (moment(login.createdAt).isBefore(moment().subtract(10, 'minutes'))) {
        return {
            application,
            email,
            status: 'LOGIN_EXPIRED'
        }
    }

    // const [authorization] = await ctx.connection.query('SELECT * FROM authorizations WHERE userId = ? and applicationId = ? LIMIT 1', [
    //     registration.userId,
    //     registration.applicationId
    // ])

    // if (!authorization) {

    //     await ctx.connection.query('INSERT INTO authorizations SET ?', {
    //         applicationId: registration.applicationId,
    //         userId: registration.userId,
    //         createdAt: new Date()
    //     })
    // }

    await ctx.connection.query('UPDATE logins SET state = ? WHERE token = ?', [
        'VERIFIED',
        token
    ])

    await ctx.connection.query('UPDATE sessions SET activeId = ? WHERE token = ? AND activeId = ?', [
        'YES',
        token,
        'NO'
    ])

    return {
        application,
        email,
        status: 'VERIFIED'
    }
}