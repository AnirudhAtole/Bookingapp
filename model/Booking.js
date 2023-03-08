const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const User = sequelize.define('Booking',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey: true
    },
    name :{
        type : Sequelize.STRING,
        allowNull:false,

    },
    email:
    {
        type:Sequelize.STRING,
        allowNull:false,
    },
    phoneNumber:
    {
        type:Sequelize.STRING,
        allowNull:false,
    }
}
)

module.exports = User;