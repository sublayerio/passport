const mysql = require('mysql')

module.exports = ({ host, user, password, database, port }) => {

    const connection = mysql.createConnection({
        host,
        user,
        password,
        database,
        port,
        timezone: 'Z',
        charset: 'utf8mb4'
    })

    const query = (query, bindings) => new Promise((resolve, reject) => {
        connection.query(query, bindings, (err, result) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
    const connect = () => connection.connect()
    const end = () => connection.end()
    const destroy = () => connection.destroy()
    const transaction = () => query('TRANSACTION;')
    const commit = () => query('COMMIT;')
    const rollback = () => query('ROLLBACK;')

    return {
        connect,
        end,
        destroy,
        transaction,
        commit,
        rollback,
        query
    }
}