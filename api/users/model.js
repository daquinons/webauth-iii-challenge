const db = require('../../data/config');

module.exports.find = function find() {
  return db('users');
};

module.exports.findWithId = function findWithId(id) {
  return db('users').where('id', id).first();
};

module.exports.create = function create(userObj) {
  return db('users').insert(userObj);
};
