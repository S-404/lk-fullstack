
module.exports = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    next()
}