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
            tokenData[0].refreshToken = refreshToken
            return await dbController.update('tokens', tokenData[0])
        }
        return await dbController.insert('tokens', {userId, refreshToken})
    }

    async removeToken(refreshToken) {
        const tokenData = await dbController.select('tokens', 'refreshToken', refreshToken)
        if (tokenData.length) {
            return await dbController.delete('tokens', tokenData[0].id)
        }
        return []
    }

    validateAccessToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_SECRET,null,null)
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET,null,null)
        } catch (e) {
            return null
        }
    }

}

module.exports = new TokenService()