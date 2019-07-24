const express = require('express');
const usersRouter = require('./users/router');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('./users/model');
const secrets = require('../config/secrets');

const router = express.Router();

router.get('/api', (req, res) => {
  res.json({ message: 'API is up' });
});

router.post('/api/register', async (req, res) => {
  const { username, password, department } = req.body;
  const response = await Users.create({ username, department, password: bcrypt.hashSync(password, 12)});
  res.status(201).json({ message: response });
});

router.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findByUsername(username);
  if (user && bcrypt.compareSync(password, user.password)) {
    res.json({ message: 'Welcome back', token: generateToken(user) });
  } else {
    res.status(401).json({ message: 'You shall not pass' });
  }
});

router.use('/api/users', restricted, usersRouter);

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };

  const options = {
    expiresIn: '7d'
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

function restricted(req, res, next) {
  try {
    const token = req.get('Authorization');
    jwt.verify(token, secrets.jwtSecret);
    next();
  } catch (error) {
    res.status(401).json({ message: 'You shall not pass' });
  }
}

module.exports = router;
