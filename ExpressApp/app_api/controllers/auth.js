const mongoose = require('mongoose');
const user = mongoose.model('User');

const login = (req, res) => {
    user.findOne({ email: req.body.email })
        .then(foundUser => {
            if (!foundUser) {
                res.status(404).json("User with provided email was not found")
                return;
            }
            if (foundUser.passwordHash != req.body.passwordHash) {
                return res.status(401).json("Password is incorrect");
            }
            res.status(200).json(foundUser);
        })
}


const register = (req, res) => {

    user.findOne({ email: req.body.email })
        .then(foundUser => {
            if (foundUser) {
                return res.status(401).json("User with provided email already exist");
            }
            let { email, name, phone, passwordHash } = req.body;
            let validation_error = isUserValid(email, name, phone, passwordHash);
            if (validation_error) {
                return res.status(401).json(`User data is invalid: ${validation_error}`);
            }

            user.create({
                email: email,
                phone: phone,
                name: name,
                passwordHash: passwordHash
            }).then(user => {
                if (!user) {
                    return res
                        .status(400)
                        .json(err);
                }
                return res
                    .status(201)
                    .json(user);
            }).catch(err => {
                return res.status(500).json(err)
            });
        }).catch(err => res.status(500).json(err));
}
module.exports = {
    login, register
}


const isUserValid = (email, name, phone, passwordHash) => {
    if (!email | !name | !phone | !passwordHash) {
        return "One of the user property is missing: email, name, phone or password";
    }

    return "";
};