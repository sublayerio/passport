const createRegistration = require('../functions/createRegistration')
const verifyRegistration = require('../functions/verifyRegistration')
const confirmRegistration = require('../functions/confirmRegistration')
const getApplication = require('../functions/getApplication')
const getSessionForApplication = require('../functions/getSessionForApplication')
const getUser = require('../functions/getUser')
const getApplications = require('../functions/getApplications')
const updateUser = require('../functions/updateUser')
const assert = require('../functions/assert')
const authenticate = require('../functions/authenticate')

const auth = (source, args, ctx) => {
    assert(ctx.userId, 'AUTHENTICATION_REQUIRED: You are not logged in')
}

const withMiddleware = (...middleware) => async (source, args, context, info) => {

    let promise = Promise.resolve()

    middleware.forEach(middleware => {
        promise = promise.then(() => middleware(source, args, context, info))
    })

    return promise
}

module.exports = {
    Mutation: {
        authenticate: (source, {code}, ctx) => authenticate(ctx)({code}),
        createRegistration: (source, {clientId, email}, ctx) => createRegistration(ctx)({clientId, email}),
        verifyRegistration: (source, {id}, ctx) => verifyRegistration(ctx)({id}),
        confirmRegistration: (source, {token}, ctx) => confirmRegistration(ctx)({token}),
        updateUser: withMiddleware(
            auth,
            (source, {id, input}, ctx) => updateUser(ctx)({id, input})
        )
    },
    Query: {
        viewer: () => ({})
    },
    Application: {
        clientId: source => source.id,
    },
    Viewer: {
        applications: withMiddleware(
            auth,
            (source, {id}, ctx) => getApplications(ctx)({
                userId: ctx.userId
            })
        ),
        application: withMiddleware(
            (source, {id}, ctx) => getApplication(ctx)({id})
        ),
        client: (source, {id}, ctx) => getApplication(ctx)({id}),
        session: (source, {id}, ctx) => {

            assert(ctx.applicationId, 'AUTHENTICATION_REQUIRED: Authentication required')

            return getSessionForApplication(ctx)({
                id,
                applicationId: ctx.applicationId
            })
        },
        user: withMiddleware(
            auth,
            (source, {id}, ctx) => getUser(ctx)({id})
        ),
        me: withMiddleware(
            auth,
            (source, {id}, ctx) => getUser(ctx)({
                id: ctx.userId
            })
        )
    },
    Session: {
        user: (source, args, ctx) => getUser(ctx)({
            id: source.userId
        })
    },
    User: {
        displayName: (source, args, ctx) => {
            return source.firstName || source.lastName ? [source.firstName, source.lastName].join(' ') : source.email
        }
    }
}