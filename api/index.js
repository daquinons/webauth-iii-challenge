const express = require('express');
const usersRouter = require('./users/router');

const router = express.Router();

router.get('/api', (req, res) => {
  res.json({ message: 'API is up' });
});

router.post('/api/register', (req, res) => {
  res.json({ message: 'Post register' });
});

router.post('/api/login', (req, res) => {
  res.json({ message: 'Post login' });
});

router.use('/api/users', usersRouter);

module.exports = router;
