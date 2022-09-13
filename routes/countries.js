const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');

const { 
  getAllCountries,
  getOneCountry,
  createCountry,
  updateCountry,
  deleteCountry
} = require('../controllers/country');

const router = Router();

router.get('/', getAllCountries);

router.get('/:id', [
  check('id', 'Id is not valid').isMongoId(),
  validateFields
], getOneCountry);

router.post('/', [
  check('name', 'Country name is required').notEmpty(),
  check('tag', 'Country tag must contain 2 or 3 characters').notEmpty().isLength({
    min: 2,
    max: 3
  }),
  validateFields
], createCountry);

router.put('/:id', [
  check('id', 'Id is not valid').isMongoId(),
  check('name', 'Country name is required').notEmpty(),
  check('tag', 'Country tag must contain 2 or 3 characters').notEmpty().isLength({
    min: 2,
    max: 3
  }),
  validateFields
], updateCountry);

router.delete('/:id', [
  check('id', 'Id is not valid').isMongoId(),
  validateFields
], deleteCountry);

module.exports = router;
