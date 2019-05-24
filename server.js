const corser = require('corser');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// auth stuff
const auth = require('./Controllers/authController.js')

const server = (dbInstance = null) => {
  //remove x-powered-by from response( this is to improve performance a little bit in the server)
  app.disable('etag').disable('x-powered-by');

  //initialize body parser to receive parameters within a request
  app.use(bodyParser.urlencoded({ extended: true }));

  // parse application/json
  app.use(bodyParser.json())

  //enable cors
  app.use(corser.create());

  //token validator middleware
  app.use(auth.tokenValidationMiddleware)

  //pass the sequelize instance through the request object
  if (dbInstance) {
    app.use((req, _, next) => {
      req['db'] = dbInstance;
      next();
    })
  }

  // Routes
  require('./routes/user')(app, dbInstance);

  app.listen(4000);

  console.log('server running at localhost:4000')
}

module.exports = server;
