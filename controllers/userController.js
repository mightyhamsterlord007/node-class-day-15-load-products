var User = require('../models/user');

module.exports = {
  getAllUsers: (params) => {
      return new Promise((resolve, reject) => {
        User.find(params)
            .then(users => resolve(users))
            .catch(error => reject(error));
      });
  }  
};