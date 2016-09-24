const Sequelize = require('sequelize');

let sequelize = new Sequelize('tododb', '', '', {
  dialect: 'sqlite',
  storage: './tododb.sqlite',
});

module.exports = sequelize;
