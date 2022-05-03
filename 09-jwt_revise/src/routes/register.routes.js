 
// const routes = require('express').Router();
const jwt = require('jsonwebtoken');

// const bcrypt = require('bcrypt');
const User = require('../models/user');

router.post('/login', (req, res) => {
  const today = new Date();
  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age
  }

  User.findOne({
    email: req.body.username
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          const newUser = new User(userData);
          newUser.save()
            .then(user => {
              res.json({ status: user.username + ' registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: ' user already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = router;