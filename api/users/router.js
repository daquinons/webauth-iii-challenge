const express = require('express');
const Users = require('./model');
const router = express.Router();

router.get('/', async (req, res) => {
  const users = await Users.find();
  res.json(users);
});

module.exports = router;
