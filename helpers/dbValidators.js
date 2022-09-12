const Attendee = require('../models/attendee');
const Country = require('../models/country');

const countryExists = async countryId => {
  const country = await Country.findById(countryId);

  if (!country) {
    throw new Error('Country does not exists');
  };
};

const emailExists = async email => {
  const attendee = await Attendee.findOne({ email });
  
  if (attendee) {
    throw new Error('Email already exists');
  };
};

module.exports = {
  countryExists,
  emailExists
};
