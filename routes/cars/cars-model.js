const db = require("../../data/dbConfig")

function getCars() {
    return db('*').from('car-dealer')
}

function addCars(car) {
    return db('car-dealer').insert(car)
}

function getCarsById(id) {
    return db('car-dealer').where({ id })
}

function updateCars(id, changes) {
    return db('car-dealer').where({ id }).update(changes)
}

function deleteCars(id) {
    return db('car-dealer').where({ id }).del()
}

module.exports = {
    getCars,
    addCars,
    getCarsById,
    updateCars,
    deleteCars
}