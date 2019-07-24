const express = require('express');

const router = express.Router();

router.use('/api', (req, res) => {
  res.json({ message: 'API is up' });
});

module.exports = router;
