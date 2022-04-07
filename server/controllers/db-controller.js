const axios = require("axios")

const PORT_DB = process.env.PORT_DB;
const db = `http://localhost:${PORT_DB}/db`

class DbController {
    // /db queries
    async redirectQuery(url, method){
        const responseData = await axios({
                method,
                url: `http://localhost:${PORT_DB}${url}`,
                data: {}
            })
        return responseData.data
    }



    // /auth queries
    async insert(collection, data) {
        const url = `${db}/${collection}`
        const response = await axios.post(url, data, {})

        return response.data
    }

    async select(collection, criteria, value) {
        const url = `${db}/${collection}?${criteria}=${value}`
        const response = await axios.get(url, {})
        return response.data
    }

    async update(collection, data) {
        const url = `${db}/${collection}/${data.id}`

        const response = await axios.put(url, data, {})
        return response.data
    }

    async delete(collection, id) {
        const url = `${db}/${collection}/${id}`

        const response = await axios.delete(url, {})
        return response.data
    }
}

module.exports = new DbController()