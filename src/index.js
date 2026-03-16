// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"
import connectDB from "./db/index.js"

connectDB()








// import express from "express"
// const app = express()
// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("Error",(error)=>{
//             console.log("not talking to db", error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listening on ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR",error)
//         throw err
//     }
// })()