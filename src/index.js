//  require('dotenv').config({path:"./env"})
import { config } from "dotenv";
import connectdb from "./db/index.js";


config({ path: "./.env" });


connectdb();



connectdb()











/* 
import express from "express";
const app = express()
(async() =>{
    try {
        await mongoose.connect(`${process.env
            .MONGODB_URI}/${DB_NAME}`)
            app.on(errror, (error)=>{
                 console.log("ERR:",error);
                 throw error
            })
            app.listen(process.env.PORT, ()=>{
                console.log(`app is listening on ${process.env.PORT}`);
                
            })
    } catch (error) {
        console.error("ERROR:", error)
        throw err
        
    }
})()*/
