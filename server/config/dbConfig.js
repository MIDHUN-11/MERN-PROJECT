// import  {monggose, connection } from "mongoose";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToDatabase = async()=>{
    try{
    const {connection} = await mongoose.connect(
       "mongodb+srv://midhun:Password@cluster0.ymclots.mongodb.net/bookmyshow");
        // console.log(connection);
    if(connection){
        console.log("connection established");
    }
}
catch(e){
    console.log("facing issue while connecting DB",e.message)
}
}

export default  connectToDatabase;