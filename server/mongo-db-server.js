const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dbObj = require("./config/dbconfig");
var bodyparser=require("body-parser");
const RouterProduct = require("./routers/RouterProduct")
const fileuploader = require("express-fileupload") 
const app = express();
app.use(cors());
app.use('/uploads',express.static("uploads"))
app.use(bodyparser.json());
app.listen(2004,()=>{
    console.log("connected successfully....");
})
const server = dbObj.dburl; 
mongoose.connect(server).then(()=>{
    console.log("connected to mongo");
}).catch((err)=>{
    console.log(err);
})

app.use(express.urlencoded(true));
app.use(fileuploader());
app.use("/product", RouterProduct);
 