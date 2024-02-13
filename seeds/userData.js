const { User } = require('../models');

const userData = [
    {
      "name": "Frodo",
      "email": "frodo@hotmail.com",
      "password": "password123"
    },
    {
      "name": "Sam",
      "email": "sam@gmail.com",
      "password": "password123"
    },
    {
      "name": "Aragorn",
      "email": "aragorn@aol.com",
      "password": "password123"
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;