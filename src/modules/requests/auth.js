const kachPassword = require("../mixins/kashPassword");
const db = require('../../../db');
const Users = db.users;
const Authent = db.authent;
const token = require('../mixins/cacheCreator')()

module.exports = async (req, res) => {

    let body = req.body
    console.log(body)
    let login = '';
    const loginAuth = await Users.findOne({
            where: {
                'user_email': body.email,
                'user_password': kachPassword(body.email, body.password)
            },
        })
            .then(answer => {
                login = answer?.user_name || 'no_login'
                return answer !== null
            })
            .then(bool => {
                console.log(bool)
                return bool
            });
    if(loginAuth === true) {

        res.cookie('token', token, { maxAge: 3600000, path: '/' });
        res.cookie('login', login, { maxAge: 3600000, path: '/' });
        res.redirect('/home')

       await Authent.create({
            'login': login,
            'cookie': token
        })
        return login
    }
    else return login
}