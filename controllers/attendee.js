const Attendee = require('../models/attendee');

const createAttendee = async (req, res) => {
  
  let attendee = {};
  const { name, surname, email, country, phone, job } = req.body;

  try {
    attendee = await Attendee.create({
      name,
      surname,
      email,
      country,
      phone,
      job
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Something went wrong, the server was unable to complete your request'
    });
  };

  res.status(201).json({
    attendee
  });
};

module.exports = {
  createAttendee
};
