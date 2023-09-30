const sequelize = require('../config/connection');
const seedArticle = require('./articlesdata');
const seedCommentData = require('./commentsdata');
const seedUserData = require('./userdata');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedArticle();

  await seedCommentData();

  await seedUserData();

  process.exit(0);
};

seedAll();