import express from "express";
import mongoose  from "mongoose";

import * as dotenv from 'dotenv';
dotenv.config();

const app = express ();
const port = 3000;

app.get("/",(req , res) => {
    res.send("<h1>HELLO WORLD</h1>");
})



mongoose
.connect(process.env.MongodbURL)
.then(()=>
{
    console.log("Connected Successfully.");
    app.listen(port, () => {
        console.log(`Server running on port${port}.`);
    })
})
.catch((error) => {
    console.log(error);
})