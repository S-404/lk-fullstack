const Router = require('express');
const authRouter = new Router();
const authController = require("../controllers/auth-controller");


authRouter.post('/registration',authController.registration)
authRouter.post('/login',authController.login)
authRouter.post('/logout',authController.logout)
authRouter.post('/refresh',authController.refresh)

module.exports = authRouter;