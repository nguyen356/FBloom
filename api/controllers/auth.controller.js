import User from '../models/user.models.js';
import bcyptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
const {username, email,password} = req.body;
const hashPassword = bcyptjs.hashSync(password, 10);
const newUser = new User({username, email, password: hashPassword});
try {
    await newUser.save()
res.status(201).json("User created succesfully");
} catch (error) {
    next(errorHandler(555, 'error somewhere, go and check the code'));
}

};
