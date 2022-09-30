const express = require('express')
const simulatorController = require('../controllers/simulatorController')
const countriesController = require('../controllers/countriesController')

const router = express.Router()

router.post('/simulate', simulatorController.simulateCredit)
router.get('/get-countries', countriesController.getCountries)

module.exports = router