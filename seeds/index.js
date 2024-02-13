const sequelize = require('../config/connection');
const seedUser = require('./userData.json');
const seedPost = require('./postData.json');
const seedComment = require('./commentData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  await seedComment();

  process.exit(0);
};

seedAll();
