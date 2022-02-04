const kachPassword = require("../mixins/kashPassword");
const db = require('../../../db');
const Users = db.users;

module.exports = (req, res) =>{
    let reqBody = req.body
    Users.create({
        'user_name': reqBody.name,
        'user_email': reqBody.email,
        'user_password': kachPassword(reqBody.email, reqBody.password),
        'avatarURL': 'http://localhost:9000/project/registration/users/' + reqBody.fileName,
        'country':  reqBody.country,
        'launguage': reqBody.language,
        'gender': reqBody.gender
    })

    res.cookie('token', token, { maxAge: 3600000, path: '/' });
    res.cookie('login', reqBody.name, { maxAge: 3600000, path: '/' });
    res.redirect('/home')
    // res.redirect('/home')
    return true
}