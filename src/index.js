import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectdb from "./db/index.js"

dotenv.config({
    path:'./env'
})

connectdb()
.then(()=>{
    app. listen(process.env.PORT|| 3000,()=>{
        console.log(`server is running at port :${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("mongodb db connection failed!!",error)
})

/*
import express from "express"
const app = express();
(async () => {
    try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror",(error)=>{
            console.log("error",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Error",error);
        throw error
    }
})()
*/
