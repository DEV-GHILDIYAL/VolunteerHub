const express = require('express');
const router = express.Router();
const ngoController = require('../controller/ngo-controller');

//create event 
router.post('/create', ngoController.create)
router.get('/events', ngoController.getEvent)

module.exports = router