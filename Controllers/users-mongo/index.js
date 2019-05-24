const jwtAuth = require("../authController");

const userController = () => {
  return {
    authUser: (req, res, next) => {
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
    createUser: () => { }, // @todo implement
    getUsers: () => { }, // @todo implement,
    deleteUser: () => { } // @todo implement
  }
}

module.exports = userController
