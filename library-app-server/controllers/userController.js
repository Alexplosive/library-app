const { users } = require('../data/catalogue')

module.exports.createAccount = (req, res) => {
  try {
    const newUser = {
      username: req.body.username,
      password: req.body.password,
      role: req.body.role
    }

    users.push(newUser)

    res.status(200)
    res.json({ status: 'user added' })
  } catch (err){
    console.log(err)
  }
}

module.exports.login = (req, res) => {
  try {
    const index = users.findIndex((user) => user.username === req.body.username)

    if (index < 0 || users[index].password !== req.body.password){
      res.status(400)
      res.json({ status: 'Incorrect Credentials' })
      return
    }

    res.status(200)
    res.json({ status: 'Logged in', user: users[index] })
  }catch(err){
    console.error(err)
  }
}
