const { Router } = require('express');

const { 
  getAllCountries,
  getOneCountry,
  createCountry
} = require('../controllers/country');

const router = Router();

router.get('/', getAllCountries);
router.get('/:id', getOneCountry);
router.post('/', createCountry);

module.exports = router;
