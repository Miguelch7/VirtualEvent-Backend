const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log('SUCCESS! Database connection succesful');
  } catch (error) {
    console.log(error);
    throw new Error('ERROR! Could not connect to database');
  };
};

module.exports = {
  dbConnection
};
