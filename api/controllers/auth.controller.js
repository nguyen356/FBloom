import User from '../models/user.models.js';
import bcyptjs from 'bcryptjs';

export const signup = async (req, res) => {
const {username, email,password} = req.body;
const hashPassword = bcyptjs.hashSync(password, 10);
const newUser = new User({username, email, password: hashPassword});
try {
    await newUser.save()
res.status(201).json("User created succesfully");
} catch (error) {
    res.status(500).json(error.message);
}

};
