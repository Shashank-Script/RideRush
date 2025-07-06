import userModel from "../models/user.model.js";
import { createUser } from "../services/user.service.js";
import { validationResult } from "express-validator";
import blacklistTokenModel from "../models/blacklistToken.model.js";

export const registerUser = async (req, res, next) => {
  try {
    //validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //extract data
    const { fullname, email, password } = req.body;
    //hash password
    const hashedPassword = await userModel.hashPassword(password);
    //create user
    const user = await createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });
    //generate token
    const token = await user.generateAuthToken();

    res.status(201).json({ user, token });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req,res,next) => {
  try {
    //validate request
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    }
    //extract data
    const {email,password} = req.body
    //check if user exists
    const user = await userModel.findOne({email}).select('+password')
    if(!user){
      return res.status(401).json({errors:[{msg:"Invalid email or password"}]})
    }
    //check password
    const isCorrectPassword = await user.comparePassword(password)
    if(!isCorrectPassword){
      return res.status(401).json({errors:[{msg:"Invalid email or password"}]})
    }
    //generate token
    const token = await user.generateAuthToken()
    res.cookie('token',token)
    res.status(200).json({user,token})
  } catch (error) {
    next(error)
  }
}

export const getUserProfile = async (req,res) => {
  res.status(200).json(req.user)
}

export const logoutUser = async (req,res,next) => {
  try {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1]
    await blacklistTokenModel.create({token})
    res.clearCookie('token')
    
    res.status(200).json({message:"Logout successful"})
  } catch (error) {
    next(error)
  }
}