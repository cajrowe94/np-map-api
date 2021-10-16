const express = require('express');
const { national_park } = require('../controllers');

const router = express.Router();

router.get('/national_park', national_park.getNationalPark);

module.exports = router;