const User = require("../models/userModels");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const user = new User({ username, password });

  if (username && password) {
    user
      .save()
      .then(newUser => {
        console.log(newUser);
        res.status(201).json(newUser);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    res.status(404).json({
      error: "Please provide a USERNAME and PASSWORD."
    });
  }
};

module.exports = {
  createUser
};
