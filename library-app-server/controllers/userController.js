const { users } = require('../data/catalogue')

module.exports.getAllUsers = (req, res) => {
  res.status(200)
  res.json(users)
}
