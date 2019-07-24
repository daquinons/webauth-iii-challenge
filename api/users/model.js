const db = require('../../data/config');

module.exports = function find() {
  return db('users');
};

module.exports = function findWithId(id) {
  return db('users').where('id', id).first();
};

module.exports = function create(userObj) {
  return db('users').insert(userObj);
};
