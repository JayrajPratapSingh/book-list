const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
const USER = require("./model/model")
const Port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json());
app.use(require("./routes/auth"));

mongoose.connect("mongodb+srv://jairajbooklist:jai123456@cluster0.yu40f0d.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true})
mongoose.connection.on("connected",()=>{
    console.log("database is connected")
})
mongoose.connection.on("err",()=>{
    console.log("not connected to database")
})




app.listen(Port, ()=>{
    console.log(`server is running at port no ${Port}`);
})