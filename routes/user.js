const userRoutes = function (app) {
  const userModel = require('../Models/user-model-mongo');
  const models = {
    userModel: userModel
  }
  const userController = require('../Controllers/users-mongo')(models);

  app.route('/user/auth')
    .post(userController.authUser)

  app.route('/user')
    .get(userController.getUsers)
    .post(userController.createUser)
    .delete(userController.deleteUser)

}

module.exports = userRoutes
