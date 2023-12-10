// import { Express } from "express";
import express from 'express';
import UserRoutes from './routes/user.routes.js';
import { config } from 'dotenv';
import connectToDatabase from '../server/config/dbConfig.js';
import cookieParser from 'cookie-parser';
import MovieRoutes from './routes/movie.routes.js'
config();
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/user',UserRoutes);
app.use('/api/movie',MovieRoutes);
app.use('*',(request,response)=>{
    response.status(400).send("Page not foundd!");
})

app.listen(2020,async ()=>{
    await connectToDatabase();
    console.log("server is listening in http://localhost:2020")
})