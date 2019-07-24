const express = require('express');
const usersRouter = require('./users/router');

const router = express.Router();


router.get('/api', (req, res) => {
  res.json({ message: 'API is up' });
});

router.use('/api/users', usersRouter);

module.exports = router;
