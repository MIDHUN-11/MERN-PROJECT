import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const register =async (request,response)=>{
    const userData = request.body;
    userData.password=await bcrypt.hash(userData.password,10);
    const data=await User.create(userData);
    response.status(200).send({status: true,message:"successfully registered"});
}
export const login =async (request,response)=>{
    const {email,password}=request.body;
    const userData = await User.findOne({email}).select('+password');
    if(!userData){
        response.status(401).send({status:false,message:"Invalid credentials"});
    }
    //Generte JWT token
    const jwtToken = await userData.generateJWTToken();
    response.cookie('token',jwtToken,{
        maxAge: 7*24*60*60*1000,
    })
    // else if(userData.password===password)
     if(bcrypt.compare(password,userData.password))
    {
        response.status(200).send({status:true,message:"Successfully logged in"})
    }
}
export const getProfile =async (request,response)=>{
    const {token} = request.cookies;
    const tokenDetails = jwt.verify(token,process.env.JWT_PASSWORD);
    const userDetail = await User.findById(tokenDetails.id);
    // const userId = request.user.id;
    // const userDetail = await User.findById(userId);
    response.status(200).send(userDetail);
}