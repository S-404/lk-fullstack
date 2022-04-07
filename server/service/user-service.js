const dbController = require('../controllers/db-controller')
const tokenService = require('../service/token-service')
const bcrypt = require("bcrypt");
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')

class UserService {

    async handleUserData(userData) {
        const userDto = new UserDto(userData)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.userId, tokens.refreshToken)

        return {user: userDto, ...tokens}
    }

    async registration(username, password) {
        const candidate = await dbController.select('users', 'username', username)
        if (candidate.length) {
            throw ApiError.BadRequest(`Username ${username} already used`)
        }
        const hashedPassword = await bcrypt.hash(password, 2)
        const newUser = await dbController.insert('users', {username, password: hashedPassword})

        return await this.handleUserData(newUser)
    }

    async login(username, password) {
        const user = await dbController.select('users', 'username', username)
        if (!user.length) {
            throw ApiError.BadRequest(`Username ${username} is not exists`)
        }
        const isPass = await bcrypt.compare(password, user[0].password)
        if (!isPass) {
            throw ApiError.BadRequest('Incorrect password')
        }

        return await this.handleUserData(user[0])
    }

    async logout(refreshToken) {
        return await tokenService.removeToken(refreshToken)
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenData = await dbController.select('tokens', 'refreshToken', refreshToken)
        if (!userData || !tokenData.length) {
            throw ApiError.UnauthorizedError()
        }
        const user = await dbController.select('users', 'id', userData.id)
        return  await this.handleUserData(user[0])

    }

}

module.exports = new UserService()