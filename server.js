const express = require('express')
const server = express()

const carsRoute = require('./routes/cars/cars-route')

server.use(express.json())

server.get('/', (req, res) => {
    res.send('<h4>NodeJS</h4>')
})

server.use('/api/cars', carsRoute)


module.exports = server


