const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get users'});
});

module.exports = router;
