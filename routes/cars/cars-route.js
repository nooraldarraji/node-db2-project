const express = require('express')

const router = express.Router()

const Cars = require('./cars-model')


router.get('/', (req, res) => {
    Cars.getCars()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})


router.get('/:id', (req, res) => {
    const id = req.params.id

    Cars.getCarsById(id)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

router.post('/', (req, res) => {
    // const id = req.params.id

    Cars.addCars(req.body)
        .then(car => {
            res.status(201).json(car)
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id

    Cars.updateCars(id, req.body)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    Cars.deleteCars(id)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

module.exports = router