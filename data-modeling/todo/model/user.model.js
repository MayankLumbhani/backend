import mongoose, { model } from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: string,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: string,
        required: true
    }
},
    {
        timestamps: true
    }
)
export const User = mongoose.model("User", UserSchema)