const express = require('express')
const routes = express.Router()
const Storage = require('./app/model/Storage')

//Main Rote
routes.get("/", (req,res) => {
    return res.render("index")
})

//Rote to give json data to the Chart
routes.get("/temperature", async (req,res) => {
    await Storage.chart((chart) => {
        var result = []
        for(item of chart){
            var data = [
                Date.parse(item.date),
                Number(item.temperature)
            ]
            result.push(data)
        }
        res.json(result)
    })
})

/****In ERROR CASE*/
routes.use((req, res) => {
    res.status(404).send("not_found");
})

module.exports = routes