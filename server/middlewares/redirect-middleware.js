const dbController = require('../controllers/db-controller')

module.exports = async function (req, res, next) {
    try {
        const dbResponse = await dbController.redirectQuery(req.originalUrl, req.method, req.body)
        res.json(dbResponse)
    }catch (e){
        next(e)
    }


}