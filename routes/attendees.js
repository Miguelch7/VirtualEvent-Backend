const { Router } = require('express');
const { check } = require('express-validator');
const { countryExists, emailExists } = require('../helpers/dbValidators');
const { validateFields } = require('../middlewares/validateFields');
const { 
  getAllAttendees,
  getOneAttendee,
  createAttendee,
  updateAttendee
} = require('../controllers/attendee');

const router = Router();

router.get('/', getAllAttendees);

router.get('/:id', [
  check('id', 'Id is not valid').isMongoId(),
  validateFields
], getOneAttendee);

router.post('/', [
  check('name', 'Name is required').notEmpty(),
  check('surname', 'Surname is required').notEmpty(),
  check('email', 'Email is not valid').isEmail(),
  check('email').custom(emailExists),
  check('country', 'Country is not valid').isMongoId(),
  check('country').custom(countryExists),
  check('phone', 'Phone must contain at least 10 digits').isNumeric().isLength({ min: 10 }),
  check('job', 'Job is required'),
  validateFields
], createAttendee);

router.put('/:id', [
  check('id', 'Id is not valid').isMongoId(),
  check('name', 'Name is required').notEmpty(),
  check('surname', 'Surname is required').notEmpty(),
  check('email', 'Email is not valid').isEmail(),
  check('country', 'Country is not valid').isMongoId(),
  check('country').custom(countryExists),
  check('phone', 'Phone must contain at least 10 digits').isNumeric().isLength({ min: 10 }),
  check('job', 'Job is required'),
  validateFields
], updateAttendee);

module.exports = router;