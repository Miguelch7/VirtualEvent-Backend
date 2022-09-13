const { Schema, model } = require('mongoose');

const CountrySchema = Schema({
  name: {
    type: String,
    required: [true, 'Country name is required']
  },
  tag: {
    type: String,
    required: [true, 'Country tag is required']
  }
});

module.exports = model('Country', CountrySchema);
