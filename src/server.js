//DEFININDO VARIAVEIS
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const arduino = require('./lib/arduino') //Just instancing the arduino connection

const server = express()

server.use(express.urlencoded({extended: true}))
server.use(express.static('public')) 

server.use(routes)

require('dotenv/config');

server.set("view engine","html")

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: false
})


//SETANDO O SERVIDOR NA PORTA 5000
server.listen(80, function(){
    console.log('Server is working')
})

//FIM  CONFIG DE DO SERVER NA PORTA 5000