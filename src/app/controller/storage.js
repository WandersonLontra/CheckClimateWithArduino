const { date } = require("../../lib/utils")
const Storage = require("../model/Storage")
const dataJson = require('../../../public/sensor.json')
let lastHour = 0
let setMin = 0

setInterval(() => {
    const hour = date(Date.now()).hour
    const minutes = date(Date.now()).minutes
    
    //Save per Hour
    if(hour != lastHour){
        let data = {
            temperature: dataJson.sensor.temperature,
            humidity: dataJson.sensor.humidity
        }
        Storage.store(data)
        lastHour = hour
    }

    //Save per half hour
    if(minutes == 30 && setMin == 1){
        let data = {
            temperature: dataJson.sensor.temperature,
            humidity: dataJson.sensor.humidity
        }

        Storage.store(data)
        setMin = 0
    } else if(minutes != 30){
        setMin = 1
    }

}, 3000);