 import userModel from "../models/userModel.js";
 import { comparePassword, hashPassword } from "../helpers/authHelper.js";
 import JWT from "jsonwebtoken";

 export const registerController =async (req,res)=> {
        try {
            const {name, email, password,phone,address} = req.body;
            if(!name || !email || !password || !phone || !address){
                return res.send({
                    message: "Please enter all fields"
                })
            }

            // check user
            const existingUser = await userModel.findOne({email:email});

            // check existing user
            if(existingUser){
                return res.status(200).send({
                    success:false,
                    message:"User already exists,Please Login"
                })
            }

            // create new user (register user)
            const hashedPassword = await hashPassword(password);
            // save
            const user = await new userModel({name, email, password:hashedPassword,phone,address}).save();
            res.status(201).send({
                success: true,
                message: "User Registered Successfully",
                user
            });

        } catch (error) {
            console.log(error);
            res.status(500).send({
                success: false,
                message: "Error in Registration",
                error
            })
        }
};

//POST LOGIN
export const loginController = async(req,res)=>{
        try {
            const {email,password} = req.body;
            // validate
            if(!email || !password){
                return res.status(404).send({
                    success: false,
                    message: "Invalid email or password"
                })
            }

            //check user
            const user = await userModel.findOne({email:email});
            if(!user){
                return res.status(404).send({
                    success: false,
                    message: "Email not registered"
                })
            }
            // check password
            const match = await comparePassword(password, user.password);
            if(!match){
                return res.status(404).send({
                    success: false,
                    message: "Invalid password"
                })
            }
            // generate token
            const token = await JWT.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});
            res.status(200).send({
                success: true,
                message: "Login Success",
                user:{
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    address: user.address,
                    role: user.role
                },
                token
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                success: false,
                message: "Error in Login",
                error
            })
        }
};

// test controller
export const testController = (req,res)=>{
        res.send('Protected Route');
}
