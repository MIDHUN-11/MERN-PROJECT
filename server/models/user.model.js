import { Schema, model } from "mongoose";
// import { Jwt } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
const UserSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        minLength:[5,"minimum 5 character is required"],
        maxLength:[20,"maximum 20 characters are allowed"],
        trim: true,
        lowercase: true,
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match:[/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Please enter a valid email address'],
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        minLength:[5,"minimum 5 character is required"],
        // maxLength:[20,"maximum 20 characters are allowed"], //ewmoving max length bcoz we are encryting the password and while storing encrypted passsword length will differ
        select:false,
    },
    role:{
        type:String,
        enum:['USER','ADMIN'],
        default:'USER',        
    }
},
{
    timestamps: true,
});
UserSchema.methods ={
    generateJWTToken:function(){// we cant  use arrow function bcoz it has something to do wih this keyword
        // return JsonWebTokenError.sign(
            // console.log(process.env.JWT_EXPIRY,);
            return jwt.sign(
            {id:this._id},
            process.env.JWT_PASSWORD,
            {
                
                expiresIn:process.env.JWT_EXPIRY
                // expiresIn:"2h"
            }
        )
    }
}
const User = model("User",UserSchema);
export default User;
