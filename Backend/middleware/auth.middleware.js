import userModel from "../models/user.model.js";
import riderModel from "../models/rider.model.js";
import jwt from "jsonwebtoken";
import blacklistTokenModel from "../models/blacklistToken.model.js";

export const authUser = async (req,res,next) => {
    //check if token is present
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }
    //check if token is blacklisted
    const isblacklistedToken = await blacklistTokenModel.findOne({token:token})
    if(isblacklistedToken){
        return res.status(401).json({message:"Unauthorized"})
    }
    try {
        //decode the token and get the _id
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
        //find the user
        const user = await userModel.findById(decoded._id)
        //attach the user to the request
        req.user = user
        return next()
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
    }
}

export const authRider = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }
    const isblacklistedToken = await blacklistTokenModel.findOne({token:token})
    if(isblacklistedToken){
        return res.status(401).json({message:"Unauthorized"})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
        const rider = await riderModel.findById(decoded._id)
        req.rider = rider
        return next()
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
    }
}