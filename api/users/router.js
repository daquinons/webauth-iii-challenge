const express = require('express');
const Users = require('./model');
const router = express.Router();

router.get('/', async (req, res) => {
  const user = req.user;
  const users = await Users.find(user.department);
  res.json(users);
});

module.exports = router;
