
const corser = require('corser');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const connectionConfig = require('./utils/dbConnection')
const mongoose = require('mongoose');

// auth stuff
var auth = require('./Controllers/authController.js')
const server = require('./server');

if (process.env.DB_TYPE === 'mysql') {
  const sequelizeInstance = getDbConfigMysql()

  //authenticate to the db
  return sequelizeInstance
    .authenticate()
    .then(() => server(sequelizeInstance))
    .catch(err => {
      //set this flag to indicate that the connection is not available
      console.error('Unable to connect to the data base', err);
    });
}

if (process.env.DB_TYPE === 'mongo') {
  const mongoConfig = connectionConfig.getMongoDbConfig()
  mongoose.connect(mongoConfig.connectionString, mongoConfig.configOptions)
    .then(resp => console.log('connection success ??'))
    .catch(err => console.log('error in connection '))
  return true;
}


