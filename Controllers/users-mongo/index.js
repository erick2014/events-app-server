const jwtAuth = require("../authController");

const userController = (models) => {
  return {
    authUser: (req, res) => {
      const requestParams = req.body;

      if (!requestParams) {
        return res.status(400).send({ error: 'User and pass are required', data: [] })
      }
      const { user, password } = requestParams;

      if (!user) {
        return res.status(400).send({ error: 'User required', data: [] });
      }

      if (!password) {
        return res.status(400).send({ error: 'Pass required', data: [] });
      }

      if (user === "erick" && password === 'yaymypass') {
        //get a token
        let token = jwtAuth.generateToken({
          user: user,
          pass: password
        });
        return res.json({ token: token });
      } else {
        return res.status(400).send({ error: 'nope you are hacking me?', data: [] });
      }
    },
    createUser: (req, res) => {
      const requestParams = req.body;

      if (!requestParams) {
        return res.status(400).send({ error: 'Request parameters required', data: [] })
      }

      const {
        firstName = '',
        lastName = '',
        email = '',
        password = '',
      } = requestParams;

      if (!email) {
        return res.status(400).send({ error: 'Email is required', data: [] })
      }

      if (!password) {
        return res.status(400).send({ error: 'Password is required', data: [] })
      }

      const modelInstance = new models.userModel({
        email,
        firstName,
        lastName,
        password,
      });

      return modelInstance.save()
        .then(doc => res.send({ data: [doc] }))
        .catch(err => res.send({ data: [], error: err }))

    },
    getUsers: () => { }, // @todo implement,
    deleteUser: () => { } // @todo implement
  }
}

module.exports = userController
