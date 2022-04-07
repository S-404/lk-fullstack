require('dotenv').config()

const cookieParser = require("cookie-parser")

//====== express server

const express = require('express');
const authRouter = require('./routes/auth-routes')
const apiErrorMiddleware = require('./middlewares/error-middleware')
const headersMiddleware = require('./middlewares/headers-middleware')
const authMiddleware = require('./middlewares/auth-middleware')
const redirectMiddleware = require('./middlewares/redirect-middleware')


const PORT = process.env.PORT
const app = express()

app.use(headersMiddleware)
app.use(express.json())
app.use(cookieParser())
app.use('/auth', authRouter)
app.use(authMiddleware) //check jwt
app.use('/db', redirectMiddleware) //redirect query to json-server
app.use(apiErrorMiddleware)

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`)
});


//====== json server

const jsonServer = require('json-server')
const routerDb = jsonServer.router('./database/db.json')
const serverDb = jsonServer.create()
const middlewaresDb = jsonServer.defaults()

const PORT_DB = process.env.PORT_DB

serverDb.use(middlewaresDb)
serverDb.use(jsonServer.bodyParser)
serverDb.use('/db', routerDb)

serverDb.listen(PORT_DB, function () {
    console.log(`Database server is running on port ${PORT_DB}`)
})

