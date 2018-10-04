const User = require('../models/user.model');

exports.register = function (req, res) {
    var newUser = new User();

    newUser.username = req.body.username,
    newUser.password = req.body.password,
    newUser.firstname = req.body.firstname,
    newUser.lastname = req.body.lastname
    newUser.save(function(err, saveduser){
        if(err) {
            console.log(err);
            return res.status(500).send(err);
        }
        return res.status(200).send(saveduser);
    });
};

exports.login = function (req, res) {

    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username,password: password},function(err, user){
        if(err) {
            console.log(err);
            return res.status(500).send();
        }
        if(!user) {
            return res.status(404).send();
        }
        req.session.user = user;
        return res.status(200).send(user);
    });
};