const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','Asparagus',{dialect:'mysql',host:'localhost'});

module.exports = sequelize;