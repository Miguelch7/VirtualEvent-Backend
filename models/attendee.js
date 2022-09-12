const { Schema, model } = require('mongoose');

const AttendeeSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  surname: {
    type: String,
    required: [true, 'Surname is required']
  },
  email: {
    type: String,
    unique: [true, 'Email must be unique'],
    required: [true, 'Email is required']
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: 'Country',
    required: [true, 'Country is required']
  },
  phone: {
    type: String,
    unique: [true, 'Phone must be unique'],
    required: [true, 'Phone is required']
  },
  job: {
    type: String,
    required: [true, 'Job is required']
  }
});

module.exports = model('Attendee', AttendeeSchema);
