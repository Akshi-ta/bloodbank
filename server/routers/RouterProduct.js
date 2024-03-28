const express = require("express");
const{doRequest , doLogin , doRegister, findd,doUpdate, doSave } = require('../controllers/ControllerProduct')
const app = express.Router();

app.post("/make-a-request", doRequest);
app.post("/register" ,doRegister);
app.post("/dologin", doLogin) 
app.post("/one", findd); // c g 
app.post("/update",doUpdate);  // c g
app.post("/save-info",doSave); // c g 
module.exports=app;