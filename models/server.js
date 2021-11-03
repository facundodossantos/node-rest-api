const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares() {
    // cors
    this.app.use( cors() );

    // body-parser: el body que viene en el post lo convierte en un objeto
    this.app.use( express.json() );

    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    
      this.app.use( this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Example app listening on port ", this.port);
    });
  }
}

module.exports = Server;
