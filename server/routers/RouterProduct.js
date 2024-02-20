const express = require("express");
const{doRequest} = require('../controllers/ControllerProduct')
const app = express.Router();

app.post("/make-a-request", doRequest);
module.exports=app;