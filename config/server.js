const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db');

class Server {

  constructor() {
    this.app = express();
    this.host = process.env.HOST || '0.0.0.0';
    this.port = process.env.PORT || 8080;

    this.paths = {
      attendees: '/api/attendees',
      countries: '/api/countries'
    }

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use( cors() );
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.attendees, require('../routes/attendees'));
    this.app.use(this.paths.countries, require('../routes/countries'));
  }

  listen() {
    this.app.listen(this.port, this.host, () => {
      console.log('Server is running at ', this.port);
    });
  }
}

module.exports = Server;