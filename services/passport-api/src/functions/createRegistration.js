const moment = require('moment')
const uuid = require('uuid')
const browserInfo = require('browser-info')
const assign = require('lodash/assign')
const generateCode = require('../services/generateCode')
const mail = require('../services/mail')
const login = require('../mails/login')
const globalId = require('./globalId')
const getApplication = require('./getApplication')

module.exports = ctx => async ({ clientId, email }) => {

    const application = await getApplication(ctx)({
        id: clientId
    })

    const createSession = async ({ name, userId, activeId, browserName, browserVersion, browserFullVersion, browserOs }) => {

        const sessionId = uuid.v4()
        const registrationId = uuid.v4()
        const token = uuid.v4()

        const loginId = uuid.v4()

        await ctx.connection.query('INSERT INTO logins SET ?', {
            id: loginId,
            applicationId: clientId,
            name,
            userId,
            browserName,
            browserVersion,
            browserFullVersion,
            browserOs,
            token,
            remoteAddress: ctx.req.clientIp,
            state: 'OPEN',
            createdAt: moment().toDate(),
        })

        await ctx.connection.query('INSERT INTO sessions SET ?', {
            id: sessionId,
            name,
            applicationId: clientId,
            token,
            registrationId,
            lastUsedAt: moment().toDate(),
            createdAt: moment().toDate(),
            used: 0,
            userId,
            activeId,
            browserName,
            browserVersion,
            browserFullVersion,
            browserOs
        })

        return sessionId
    }

    const code = generateCode()

    const [user] = await ctx.connection.query('SELECT * FROM users WHERE email = ? LIMIT 1', [
        email
    ])

    let userId = user ? user.id : null

    if (!user) {

        userId = globalId.generate('usr')

        await ctx.connection.query('INSERT INTO users SET ?', {
            id: userId,
            email,
            createdAt: moment().toDate()
        })
    }

    let sessionInput = {
        name: 'Unknown',
        userId,
        activeId: 'NO',
    }

    try {

        const browser = browserInfo(ctx.req.headers['user-agent'])

        sessionInput = assign(sessionInput, {
            name: 'Website (' + browser.name + ')',
            browserName: browser.name,
            browserVersion: browser.version,
            browserFullVersion: browser.fullVersion,
            browserOs: browser.os
        })

    } catch (e) {
        // silent
    }

    const sessionId = await createSession(sessionInput)

    const [session] = await ctx.connection.query('SELECT * FROM sessions WHERE id = ? LIMIT 1', [
        sessionId
    ])

    const html = login({
        companyName: application.name,
        brandImageUrl: application.brandImageUrl,
        email: email,
        code: code,
        url: ctx.env.CLIENT_URL,
        token: session.token
    })

    await mail(ctx).send({
        to: email,
        subject: `Inloggen bij ${application.name}`,
        html
    })

    return {
        id: session.registrationId,
        securityCode: code
    }
}