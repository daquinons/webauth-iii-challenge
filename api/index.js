const express = require('express');
const usersRouter = require('./users/router');
const bcrypt = require('bcrypt');
const Users = require('./users/model');

const router = express.Router();

router.get('/api', (req, res) => {
  res.json({ message: 'API is up' });
});

router.post('/api/register', async (req, res) => {
  const { username, password, department } = req.body;
  const response = await Users.create({ username, department, password: bcrypt.hashSync(password, 12)});
  res.status(201).json({ message: response });
});

router.post('/api/login', (req, res) => {
  res.json({ message: 'Post login' });
});

router.use('/api/users', usersRouter);

module.exports = router;
