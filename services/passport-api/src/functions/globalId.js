const d = /^[a-z]{3}[A-Za-z0-9]{14}$/

const c = {
    generateId: function (c, d) {
        let e = Math.random
        for (var n = [], p = 0; p < d; p++) n.push(c.charAt(Math.floor(e() * c.length)))
        return n.join("")
    },
    _possibleObjectIdChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    _generateObjectId: function (a) {
        return a + c.generateId(c._possibleObjectIdChars, 14)
    },
    isStringAnObjectId: function (a) {
        return d.test(a)
    },
}

module.exports = {
    generateObjectId: c._generateObjectId,
    isOfType: function (type, a) {
        return "string" === typeof a && c.isStringAnObjectId(a) && type === a.substr(0, 3)
    },
    generate: function (type) {
        return c._generateObjectId(type, true)
    }
}