const User = require('../models/user')
const bcrypt = require('bcryptjs');
const {comparePassword} = require('../middleware/passwordValidation')

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find()
            res.status(200).json(users)
        }
        catch (err) {
            res.json(err)
        }
    },

    getOneUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.json(user)
        }
        catch (err) {
            res.json(err)
        }
    },

    createUser: async (req, res) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            const user = await User.create(req.body)
            res.json(user)
        }
        catch (err) {
            res.json(err)
        }
    },

    userLogin: async (req, res) => {
        try{
            console.log('in the try', req.body)
            const {name, password} = req.body;
            console.log(name)
            if (!name || !password) {
                throw error(422, 'Missing email or password');
            }
            const user = await User.findOne({ name: name });
            if (!user) {
                throw error(403,'username or password invalid');
            }
            const validatePassword = await comparePassword(password, user.password);
            if (!validatePassword) {
                throw error(403,'username or password invalid');
            }
            console.log('user logged')
            res.json(user)
        }
        catch(err){
            res.json(err);
        }
    },
}