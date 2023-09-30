const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {

}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    article_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'articles',
        key: 'id'
      },
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true
      },
    },
    comment_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    comment_user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);
module.exports = Comments;