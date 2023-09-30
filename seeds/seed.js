const sequelize = require('../config/connection');
const seedArticle = require('./articlesdata');
const seedCommentData = require('./commentsdata');
const seedUserData = require('./userdata');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedUserData();

  await seedArticle();

  await seedCommentData();

  process.exit(0);
};

seedAll();