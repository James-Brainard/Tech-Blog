const { User } = require('../models');

const userData = [
  {
    user_name: 'jmb007',
    email: 'james.brainard@email.com',
    password: 'password999@'
  },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;