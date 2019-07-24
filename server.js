const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const api = require('./api');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(api);

module.exports = server;
