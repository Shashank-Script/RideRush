import riderModel from "../models/rider.model.js";

const createRider = async ({firstname,lastname,email,password,color,plateNo,capacity,vehicleType}) => {
    if(!firstname||!email||!password||!color||!plateNo||!capacity||!vehicleType){
        throw new Error("All fields are required")
    }
    const rider = await riderModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plateNo,
            capacity,
            vehicleType
        }
    })
    return rider
}

export default createRider