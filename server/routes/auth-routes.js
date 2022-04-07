const Router = require('express')
const authRouter = new Router()
const authController = require("../controllers/auth-controller")
const {body} = require('express-validator')

authRouter.post(
    '/registration',
    body('username').isLength({min: 4, max: 16}),
    body('password').isLength({min: 3, max: 32}),
    authController.registration)

authRouter.post('/login', authController.login)
authRouter.post('/logout', authController.logout)
authRouter.post('/refresh', authController.refresh)

module.exports = authRouter;