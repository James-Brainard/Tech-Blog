const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Articles extends Model {}

Articles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blog_title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    blog_contents: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true
      },
    },
    blog_creator: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: true
      }
    }
  }
)