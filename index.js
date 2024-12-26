// Importing express
import express from "express";
// Improting cors which handile cors policies
import cors from "cors";
// Importing dotenv
import dotenv from "dotenv";
dotenv.config();
// imporing DB connection
import connectDB from "./database/connection.js";
// Creating object for expresss
const app = express();
// For allowing other orgin
app.use(cors());

// creating responce for home routs
app.get("/", (req, res) => {
    res.status(200).json("Sucessfully connected");
  });

// app.get("/madhu",(req,res) =>{

// })

// connnection
const startserver = async () => {
    await connectDB();
    //  starting server
    app.listen(process.env.PORT, () => {
      console.log(`Server Rur at ${process.env.PORT}`);
    });
  };
  startserver();