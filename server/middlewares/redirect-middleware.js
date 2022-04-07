const dbController = require('../controllers/db-controller')

module.exports = async function (req, res, next) {
    try {
        const dbResponse = await dbController.redirectQuery(req.originalUrl, req.method)
        res.json(dbResponse)
    }catch (e){
        next(e)
    }


}