const Sequelize = require('sequelize');

const sequelize = new Sequelize('project_VUE', 'antony', 'bp024W', {
    dialect: "mysql",
    host: "192.168.1.72:3306"
});


const users = require('./users')(sequelize);
const authent = require('./authent')(sequelize);
module.exports = {
    sequelize: sequelize,
    users: users,
    authent: authent
}
