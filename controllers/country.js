const Country = require('../models/country');

const getAllCountries = async (req, res) => {
  let countries = [];

  try {
    countries = await Country.find();
  } catch (error) {
    return res.status(500).json({
      msg: 'Something went wrong, the server was unable to complete your request'
    });
  }

  res.status(200).json({
    countries
  });
};

const getOneCountry = async (req, res) => {

  let country;
  const { id } = req.params;

  try {
    country = await Country.findById(id);
  } catch (error) {
    return res.status(500).json({
      msg: 'Something went wrong, the server was unable to complete your request'
    })
  }

  if (!country) {
    return res.status(404).json({
      msg: 'Category does not exist'
    });
  };

  res.status(200).json({
    country
  });
};

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
  getAllCountries,
  getOneCountry,
  createCountry
}