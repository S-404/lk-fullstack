require('dotenv').config()

const cookieParser = require("cookie-parser");
const express = require('express');
const authRouter = require('./routes/auth-routes')
const jsonServer = require('json-server')
const routerDb = jsonServer.router('./database/db.json')
const apiErrorMiddleware = require('./middlewares/error-middleware')
const headersMiddleware = require('./middlewares/headers-middleware')

const PORT = process.env.PORT;
const app = express();


app.use(headersMiddleware);
app.use(express.json())
app.use(cookieParser())

app.use('/auth', authRouter)
app.use('/db', routerDb);

app.use(apiErrorMiddleware)

app.listen(PORT, function () {
    console.log(`Backend server is running on port ${PORT}`);
});




