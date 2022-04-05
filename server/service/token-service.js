const jwt = require('jsonwebtoken')
const dbController = require('../controllers/db-controller')

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'}, null)
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '1d'}, null)
        return {accessToken, refreshToken}
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await dbController.select('tokens', 'userId', userId)
        if (tokenData.length) {
            tokenData.refreshToken = refreshToken
            return await dbController.update('tokens', tokenData)
        }
        return await dbController.insert('tokens', {userId, refreshToken})
    }

}

module.exports = new TokenService();