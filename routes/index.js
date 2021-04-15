const express = require('express');
const { nationalpark } = require('../controllers');

const router = express.Router();

router.get('/nationalpark', nationalpark.getNationalPark);

module.exports = router;