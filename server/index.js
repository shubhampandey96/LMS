import express from "express";
import dotenv from"dotenv";
import conncectDB from "./database/db.js";
dotenv.config({});
// call database connection here
connectDB();
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`sERVER LISTEN AT PORT ${PORT}`);

})
