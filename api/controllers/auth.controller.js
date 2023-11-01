import User from '../models/user.models.js';
import bcyptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
const {username, email,password} = req.body;
const hashPassword = bcyptjs.hashSync(password, 10);
const newUser = new User({username, email, password: hashPassword});
try {
    await newUser.save()
res.status(201).json("User created succesfully");
} catch (error) {
    next(error);
}
};
export const signin = async (req, res, next) =>{
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({email});
        if (!validUser) return next(errorHandler(404, 'User not found!!!'));
        const validPassword = bcyptjs.compareSync(password, validUser.password);
        if (!validUser) return next(errorHandler(402, 'Wrong credentials!'));
        const token = jwt.sign({ id:validUser._id}, process.env.JWT_SECRET);
        const {password: passwordtoken, ...rest} = validUser._doc;
        res.cookie('access_token', token,{HttpOnly:true, expires: new Date(Date.now() + 24 * 60 * 60)}).status(200).json(rest);
    } catch (error) {
        next(error);
    }
};
