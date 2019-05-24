const userRoutes = function (app, dbInstance) {
  const userController = require('../Controllers/users-mongo')();

  app.route('/user/auth')
    .post(userController.authUser)

  app.route('/user')
    .get(userController.getUsers)
    .post(userController.createUser)
    .delete(userController.deleteUser)

}

module.exports = userRoutes
