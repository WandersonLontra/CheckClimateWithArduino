const fs = require('fs')
const dataJson = require('../../public/sensor.json')


const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('COM3');
const parser = new Readline();
port.pipe(parser);

// Read the port data
port.on("open", () => {
    console.log('SERIAL PORT ARDUINO IS CONNECTED');
  });

parser.on('data', (arduinoData) => {
    var sensorContent = arduinoData.split(':');

    let receivedFromSensor = {
        temperature: `${sensorContent[0]}`.slice(0,4),
        humidity: `${sensorContent[1]}`.slice(0,4)
    }

    dataJson.sensor = receivedFromSensor

    fs.writeFile("public/sensor.json", JSON.stringify(dataJson, null, 2), function(err){
        if(err) return console.log("Ops! Houve um erro na escrita")
    })

    const storage = require("../app/controller/storage")
})

/*
SENSOR.JSON MODEL'S FILE IS BELOW:

{
  "sensor": {
    "temperature": "20.0",
    "humidity": "17.0"
  }
}

*/