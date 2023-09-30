const { Articles } = require('./articles');
const { Comments } = require('./comments');
const { User } = require('./users');

Articles.hasMany(Comments, {
  foreignKey: 'articles_id',
});

Comments.belongsTo(Articles, {
  foreignKey: 'articles_id',
});

// user has many comments
User.hasMany(Comments, {
  foreignKey: 'user_id',
});

// comments belong to users
Comments.belongsTo(User, {
  foreignKey: 'user_id',
})

module.exports = { Articles, Comments, User };