const { Articles } = require('./articles');
const { Comments } = require('./comments');
const { User } = require('./users');

User.hasMany(Articles, {
  foreignKey: 'created_by_user_id',
  onDelete: 'CASCADE'
});

Articles.belongsTo(User, {
  foreignKey: 'created_by_user_id',
  onDelete: 'CASCADE'
});

Articles.hasMany(Comments, {
  foreignKey: 'article_id',
  onDelete: 'CASCADE'
});

// user has many comments
User.hasMany(Comments, {
  foreignKey: 'comment_user_id',
});

Comments.belongsTo(Articles, {
  foreignKey: 'article_id',
});

// comments belong to users
Comments.belongsTo(User, {
  foreignKey: 'comment_user_id',
});

// -------------------------------

// Articles.belongsTo(User, {
//   foreignKey: "created_by_user_id",
//   onDelete: "CASCADE",
// });
// Articles.hasMany(Comments, {
//   foreignKey: "article_id",
//   onDelete: "CASCADE",
// });
// // comments belong to users
// Comments.belongsTo(User, {
//   foreignKey: "comment_user_id",
// });


module.exports = { Articles, Comments, User };