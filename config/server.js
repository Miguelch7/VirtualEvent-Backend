const express = require('express');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT || 8080;

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // middlewares here
  }

  routes() {
    // routes here
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server is running at ', this.port);
    });
  }
}

module.exports = Server;