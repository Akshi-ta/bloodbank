const express = require("express");
const{doRequest , doLogin , doRegister, findd,doUpdate, doSave , dofetchData , dofetchIncomingRequest } = require('../controllers/ControllerProduct')
const app = express.Router();

app.post("/make-a-request", doRequest);
app.post("/register" ,doRegister); //signup
app.post("/dologin", doLogin) 
app.post("/one", findd); //find the user
app.post("/update",doUpdate);  
app.post("/save-info",doSave); // save the data of profile
app.post("/fetchdata" , dofetchData);
app.post("/fetchIncomingRequest", dofetchIncomingRequest);
module.exports=app;