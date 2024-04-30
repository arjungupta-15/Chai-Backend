import mongoose from "mongoose";

import { DB_NAME } from "../constant.js";
const connectdb = async()=>{
    try {
       const connectioninstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       console.log(`\n Mongodb connected !! DB HOST :${connectioninstance.connection.host} `)
    } catch (error) {
        console.log("Mongodb connection error",error);
        process.exit(1);
    }
}

export default connectdb