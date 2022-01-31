const Sequelize = require('sequelize');

// const sequelize = new Sequelize('d6086lp8cctpfa', 'tzooiagtheuoje', '657390ea36bfbc69622caab7582e10be1ca78572588bec49fe3735a61cb12533', {
//     dialect: "postgresql",
//     host: "ec2-54-208-139-247.compute-1.amazonaws.com:5432"
// });


let sequelize = new Sequelize(    "postgres://tzooiagtheuoje:657390ea36bfbc69622caab7582e10be1ca78572588bec49fe3735a61cb12533@ec2-54-208-139-247.compute-1.amazonaws.com:5432/d6086lp8cctpfa", {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });



const users = require('./users')(sequelize);
const authent = require('./authent')(sequelize);
module.exports = {
    sequelize: sequelize,
    users: users,
    authent: authent
}
