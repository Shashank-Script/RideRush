import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const riderSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength:[3, "First name must be at least 3 characters long"]
        },
        lastname:{
            type: String,
            minlength:[3, "Last name must be at least 3 characters long"]
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength:[5, "Email must be at least 5 characters long"],
        match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email' ],
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    socketId:{
        type: String
    },
    status: {
        type: String,
        enum: ['online', 'offline'],
        default: 'offline'
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength:[3, "Color must be at least 3 characters long"]
        },
        plateNo:{
            type: String,
            required: true,
            minlength:[3, "Plate number must be at least 3 characters long"]
        },
        capacity:{
            type: Number,
            required: true,
            min:[1, "Capacity must be at least 1 person"]
        },
        vehicleType:{
            type: String,
            required: true,
            enum: ['car', 'auto', 'motorcycle'],
        }
    },
    location:{
        longitude: {
            type: Number,
        },
        latitude: {
            type: Number,
        }
    }
})

riderSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET_KEY,{expiresIn:"24h"})
    return token
}

riderSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

riderSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10)
}

const riderModel = mongoose.model("rider", riderSchema)
export default riderModel