const Articles = require('./articles');
const Comments = require('./comments');
const Users = require('./users');

Articles.hasMany(Comments, {
  foreignKey: 'articles_id',
});

Comments.belongsTo(Articles, {
  foreignKey: 'articles_id',
});

module.exports = { Articles, Comments, }