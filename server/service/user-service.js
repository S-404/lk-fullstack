const dbController = require('../controllers/db-controller')
const tokenService = require('../service/token-service')
const bcrypt = require("bcrypt");
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')

class UserService {

    async registration(username, password) {

        const candidate = await dbController.select('users', 'username', username)
        if (candidate.length) {
            throw ApiError.InvalidRequest(`Username ${username} already used`)
        }

        const hashedPassword = await bcrypt.hash(password,2)

        const newUser = await dbController.insert('users', {username, password: hashedPassword})
        const userDto = new UserDto(newUser)
        const tokens = tokenService.generateTokens({...userDto})

        await tokenService.saveToken(userDto.userId,tokens.refreshToken)

        return {user: userDto, ...tokens}
    }


}

module.exports = new UserService();