const express = require('express');
const app = express();

const server = (dbInstance) => {
  console.log('connection has been established successfully');
  //remove x-powered-by from response( this is to improve performance a little bit in the server)
  app.disable('etag').disable('x-powered-by');
  //initialize body parser to receive parameters within a request
  app.use(bodyParser.urlencoded({ extended: true }));
  // parse application/json
  app.use(bodyParser.json())
  //enable cors
  app.use(corser.create());

  //pass the sequelize instance through the request object
  app.use((req, _, next) => {
    req['db'] = dbInstance;
    next();
  })

  //token validator middleware
  app.use(auth.tokenValidationMiddleware)
  //pass the sequelize instance through the request object
  app.use((req, _, next) => {
    req['db'] = dbInstance;
    next();
  })

  // USERS ROUTE
  require('./routes/user')(app, dbInstance);

  app.listen(4000);

  console.log('server running at localhost:4000')
}

module.exports = server;
