const { Router } = require('express');

const { 
  getAllCountries,
  getOneCountry,
  createCountry,
  updateCountry
} = require('../controllers/country');

const router = Router();

router.get('/', getAllCountries);
router.get('/:id', getOneCountry);
router.post('/', createCountry);
router.put('/:id', updateCountry);

module.exports = router;
