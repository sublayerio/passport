# Sublayer Passport


## Todo

- [ ] Fix database connection timeout (destroy connection / setup pool)
- [ ] Use UUIDs
- [ ] E-mail link should expire in 10 minutes


### JWT

body (base64 encoded json)

iss (issuer) who generated the jwt?
exp (expires) instant that the jwt expires. a jwt will expire, it doesn't get extended
aud (audience) who this is intended for, app id, client id
sub (subject) whoami

additional

name who
roles part of the jwt, dont need to request user service for each request for that


auth middleware

(req, res) => {

const decodedJWT = decodeJWT(req)

if (!authorized(decodedJWT, 'RETRIEVE_TODO)) {
    sendUnauthorized(res)
}

decode

// Verify header key id matches application
if (header.kid !== config.passport.applicationId) {
    return null
}

refresh tokens

refresh tokens need to be extremely well secured, they are basically you
if anyone gets your refresh token they can generate jwts for you until the refresh token expired, that can take up to weeks
store in cookie httpOnly, not acessible in javascript

global logout / revoke
make sure you can logout of everything or revoke all refresh tokens
make sure the person who hits that button has the right permissions
kill all switch