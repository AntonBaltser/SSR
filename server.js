const path = require('path')
const express = require('express')
const fs = require('fs')
const { renderToString } = require('@vue/server-renderer')
const manifest = require('./dist/server/ssr-manifest.json')

const server = express()


const cookieParser = require('cookie-parser')
const uploadFile = require('./src/modules/requests/uploadFile')
const registration = require('./src/modules/requests/registration')
const auth = require('./src/modules/requests/auth')
const verification = require('./src/modules/mixins/verification')

server.use(cookieParser())
server.use(express.json());
server.use(express.urlencoded());
const setHeaders = require('./src/modules/requests/setHeders')




const appPath = path.join(__dirname, './dist', 'server', manifest['app.js'])
const createApp = require(appPath).default

server.use('/img', express.static(path.join(__dirname, './dist/client', 'img')))
server.use('/js', express.static(path.join(__dirname, './dist/client', 'js')))
server.use('/css', express.static(path.join(__dirname, './dist/client', 'css')))
server.use('/favicon.ico', express.static(path.join(__dirname, './dist/client', 'favicon.ico')))



server.all('*', (req, res, next) => {
    setHeaders(req, res, next)
});

server.post('*',  (req, res) => {
    switch(req.url){
        case '/verificationName':
            return verification(req, res, {'user_name': req.body.name})

        case '/verificationEmail':
            return verification(req, res, {'user_email': req.body.email})

        case '/uploadPhoto':
            return uploadFile(req, res)

        case '/auth':
            return  auth(req, res)

        case '/registration':
            return   registration(req, res)

        default:
            return "";
    }
})

server.get('*', async (req, res) => {

    const { app, router } = createApp()

    await router.push(req.url)
    await router.isReady()

    const appContent = await renderToString(app)

    fs.readFile(path.join(__dirname, '/dist/client/index.html'), (err, html) => {
        if (err) {
            throw err
        }

        html = html
            .toString()
            .replace('<div id="app">', `<div id="app">${appContent}`)
        res.setHeader('Content-Type', 'text/html')
        res.send(html)
    })
    // throw new Error('BROKEN')
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}
server.listen(port, () => {
    console.log('Server working ', port )
});

// let app = server.listen(8080, () =>{
//     let host = app.address().address
//     let port = app.address().port
//     console.log("Сервер рабтает по адрессу http://%s:%s", host, port)
// })
