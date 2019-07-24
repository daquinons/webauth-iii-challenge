const db = require('../../data/config');

module.exports.find = function() {
  return db('users');
};

module.exports.findByUsername = function(username) {
  return db('users').where({ username }).first();
};

module.exports.create = function(userObj) {
  return db('users').insert(userObj);
};
