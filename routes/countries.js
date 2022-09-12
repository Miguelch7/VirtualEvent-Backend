const { Router } = require('express');

const { 
  getAllCountries,
  createCountry
} = require('../controllers/country');

const router = Router();

router.get('/', getAllCountries);
router.post('/', createCountry);

module.exports = router;
