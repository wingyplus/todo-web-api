const Sequelize = require('sequelize');
const db = require('./db');

module.exports = db.define('todo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  remark: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});
