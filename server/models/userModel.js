import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    role: { type: Number, default: 0 },
},{timestamps: true});

// type string means it can contain any type may it is a number special char letter alphabet
// trim because if user enter space before or after the name it will be removed
// unique means email should be unique
// default is 0 , 0 means false 1 means true
// timestamps is added so to know when the user is created


export default mongoose.model("users", userSchema);