const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api', (req, res) => {
  res.json({ message: 'API is up' });
});

module.exports = server;
