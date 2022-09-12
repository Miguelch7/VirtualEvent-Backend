const Attendee = require('../models/attendee');

const getAllAttendees = async (req, res) => {

  let attendees = [];

  try {
    attendees = await Attendee.find().populate('country');
  } catch (error) {
    return res.status(500).json({
      msg: 'Something went wrong, the server was unable to complete your request',
      error
    });
  };

  res.status(200).json({
    attendees
  });
};

const getOneAttendee = async (req, res) => {

  let attendee;
  const { id } = req.params;

  try {
    attendee = await Attendee.findById(id).populate('country');
  } catch (error) {
    return res.status(500).json({
      msg: 'Something went wrong, the server was unable to complete your request'
    });
  };

  if (!attendee) {
    return res.status(404).json({
      msg: 'Attendee does not exist'
    });
  };

  res.status(200).json({
    attendee
  });
};

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

const updateAttendee = async (req, res) => {

  let attendee;
  const { id } = req.params;
  const { name, surname, email, country, phone, job } = req.body;

  try {
    attendee = await Attendee.findByIdAndUpdate(id, {
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

  if (!attendee) {
    return res.status(404).json({
      msg: 'Attendee does not exist'
    });
  };

  attendee.name = name;
  attendee.surname = surname;
  attendee.email = email;
  attendee.country = country;
  attendee.phone = phone;
  attendee.job = job;

  res.status(200).json({
    attendee
  });
};

module.exports = {
  getAllAttendees,
  getOneAttendee,
  createAttendee,
  updateAttendee
};
