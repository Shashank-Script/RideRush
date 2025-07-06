import express from "express";
const router = express.Router();
import {body} from "express-validator";
import {registerRider, loginRider,getRiderProfile,logoutRider} from "../controllers/rider.controller.js"
import {authRider} from "../middleware/auth.middleware.js"


router.post("/register",[
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name must be at least 3 characters long"),
    body("vehicle.color").isLength({min:3}).withMessage("Vehicle color must be at least 3 characters long"),
    body("vehicle.plateNo").isLength({min:3}).withMessage("Vehicle plate number must be at least 3 characters long"),
    body("vehicle.capacity").isInt({min:1}).withMessage("Vehicle capacity must be at least 1 person"),
    body("vehicle.vehicleType").isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invalid vehicle type')
],
registerRider
)

router.post("/login",[
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
],
loginRider
)

router.get("/profile",authRider,getRiderProfile )

router.get("/logout",authRider,logoutRider)


export default router