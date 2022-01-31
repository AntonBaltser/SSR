const Sequelize = require('sequelize');

module.exports = function (sequelize){
    return sequelize.define('users',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        },
        launguage: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false
        },
        avatarURL: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },{
        timestamps: false,
        tableName: 'users'
    });
}
