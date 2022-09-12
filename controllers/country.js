const Country = require('../models/country');

const createCountry = async (req, res) => {
  
  let country = {};
  const { name, tag } = req.body;
  
  try {
    country = await Country.create({
      name,
      tag: tag.toUpperCase()
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Something went wrong, the server was unable to complete your request'
    });
  };

  res.status(201).json({
    country
  });
};

module.exports = {
  createCountry
}