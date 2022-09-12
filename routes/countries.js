const { Router } = require('express');

const { createCountry } = require('../controllers/country');

const router = Router();

router.post('/', createCountry);

module.exports = router;
