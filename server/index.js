require('dotenv').config()

const cookieParser = require("cookie-parser");
const express = require('express');
const authRouter = require('./routes/auth-routes')
const jsonServer = require('json-server')
const routerDb = jsonServer.router('./database/db.json')
const apiErrorMiddleware = require('./middlewares/error-middleware')

const PORT = process.env.PORT;
const app = express();


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
app.use(express.json())
app.use(cookieParser())

app.use('/auth', authRouter)
app.use('/db', routerDb);

app.use(apiErrorMiddleware)

app.listen(PORT, function () {
    console.log(`Backend server is running on port ${PORT}`);
});




