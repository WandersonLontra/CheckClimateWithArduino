const DB = require("../../config/db")

module.exports = {
    store(data){
        const query = `
            INSERT INTO climatestorage (
                temperature,
                humidity
            ) VALUES ($1 , $2)
        `
        const values = [
            data.temperature,
            data.humidity
        ]

        DB.query(query, values, (err) => {
            if(err) throw `Database error ${err}`
        })
    },
    chart(callback){
        DB.query(`SELECT date,temperature FROM climatestorage`, (err,results) => {
            if(err) throw `Database error ${err}`

            callback(results.rows)
        })
    }
}