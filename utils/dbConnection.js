const Sequelize = require('sequelize');
// receive db connection params from environment variables
const {
  ENVIRONMENT,
  DB,
  DB_PASS,
  DB_USER,
} = process.env

const getDbHost = () => (ENVIRONMENT === "production") ? 'localhost' : '8.8.8.8'

const getDbConfigMysql = () => {
  //get  sequelize instance with a connection to a db
  return new Sequelize(DB, DB_USER, DB_PASS, {
    dialect: 'mysql',
    host: getDbHost(),
    define: { freezeTableName: true, timestamps: false }
  })
}

const getMongoDbConfig = () => {
  const {
    MONGO_DB_NAME,
    MONGO_DB_PASSWORD,
    MONGO_DB_USER,
  } = process.env

  const connectionString = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@eventsappdb-eh53e.mongodb.net/test?retryWrites=true`
  return {
    connectionString: connectionString,
    configOptions: { useNewUrlParser: true, dbName: MONGO_DB_NAME }
  }
}

module.exports = {
  getDbConfigMysql,
  getMongoDbConfig
}
