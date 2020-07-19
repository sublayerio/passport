const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

const port = process.env.PORT || 3000

const readFile = path =>
    new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });

const handle = async (req, res) => {

    try {

        const filePath = path.resolve(__dirname, './build', 'index.html')

        let data = await readFile(filePath)

        const ENVIRONMENT_OVERRIDES = Object
            .keys(process.env)
            .filter(key =>
                key.indexOf('REACT_APP') === 0
            )
            .reduce((result, key) => {
                result[key] = process.env[key]
                return result
            }, {})

        // replace the special strings with server generated strings
        data = data.replace(/\$REACT_APP_TITLE/g, process.env.REACT_APP_TITLE);
        data = data.replace(/\$REACT_APP_FAVICON_URL/g, process.env.REACT_APP_FAVICON_URL);
        data = data.replace(/\$REACT_APP_PRIMARY_COLOR/g, process.env.REACT_APP_PRIMARY_COLOR);
        data = data.replace(/\$ENVIRONMENT_OVERRIDES/g, JSON.stringify(ENVIRONMENT_OVERRIDES));

        res.send(data);

    } catch (e) {
        res.send({
            status: "error"
        })
    }
}

app.use((req, res, next) => {

    if (req.url === '/') {
        return handle(req, res, next)
    }

    return express.static(path.resolve(__dirname, './build'))(req, res, next)
})

app.use('*', handle)

app.listen(port, () => console.log(`Listening on port ${port}`))