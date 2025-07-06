import riderModel from "../models/rider.model.js";
import blacklistTokenModel from "../models/blacklistToken.model.js";
import { validationResult } from "express-validator";
import createRider from "../services/rider.service.js";

export const registerRider = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //extract data
    const { fullname, email, password, vehicle } = req.body;
    //check if rider already exists
    const isRiderAlreadyExists = await riderModel.findOne({ email });
    if (isRiderAlreadyExists) {
      return res.status(400).json({ errors: [{ msg: "Rider already exists" }] });
    }
    //hash password
    const hashedPassword = await riderModel.hashPassword(password);
    //create rider
    const rider = await createRider({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plateNo: vehicle.plateNo,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });
    //generate token
    const token = await rider.generateAuthToken();
    res.status(201).json({ rider, token });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "Internal server error" }] });
  }
};

export const loginRider = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //extract data
        const {email,password} = req.body
        //check if rider exists
        const rider = await riderModel.findOne({email}).select('+password')
        if(!rider){
            return res.status(401).json({errors:[{msg:"Invalid email or password"}]})
        }
        //check password
        const isCorrectPassword = await rider.comparePassword(password)
        if(!isCorrectPassword){
            return res.status(401).json({errors:[{msg:"Invalid email or password"}]})
        }
        const token = await rider.generateAuthToken()
        res.cookie('token',token)
        res.status(200).json({rider,token})
    } catch (error) {
        res.status(500).json({errors:[{msg:"Internal server error"}]})
    }
};

export const getRiderProfile = async (req, res) => {
  res.status(200).json(req.rider);
};

export const logoutRider = async (req,res) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[1]
        await blacklistTokenModel.create({token})
        res.clearCookie('token')
        res.status(200).json({message:"Logout successful"})
    } catch (error) {
        res.status(500).json({errors:[{msg:"Internal server error"}]})
    }
}