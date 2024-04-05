const { getProductModel } = require("../model/ModelProduct")
const  {ProductModel,SignupInfo, ProfileInfo} = getProductModel();
const path = require("path");

function doRequest(req, resp) {
    console.log(req.body);
    const bloodgroup = req.body.bloodGroup;
    const city= req.body.city;
    const state = req.body.state;
    const info = new ProductModel(req.body);
    info.save().then((ans) => {
        resp.json({ status: true, rec: ans, out: "yay" });
    }).catch((err) => {
        resp.json({
            status: false,
            error: err
        })
    })
    fetchUser(bloodgroup, city, state);
}

function fetchUser(bloodgroup , city , state)
{
    ProfileInfo.find({bloodgroup:bloodgroup , city:city , state:state}).then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    })
}

function dofetchIncomingRequest(req,resp)
{
    ProfileInfo.find({ email: req.body.email }).then((result) => {
        // console.log(result[0]);
        const bloodgroup = result[0].bloodgroup;
        const city= result[0].city;
        const state = result[0].state;
        resp.set("json");
        ProductModel.find({bloodGroup:bloodgroup , city:city , state:state}).then((ans)=>{
            resp.json({status:true , res:ans})
        }).catch((err)=>{
            resp.json({status:false, err:err.message})
        })
    }).catch(function (err) {
        resp.json({ status: false, res: err.message });
    })
}

function doRegister(req, resp) {
    const info = new SignupInfo(req.body);
    console.log(info);
    info.save().then((ans) => {
        console.log(ans);
        // resp.send(ans);
        resp.json({ status: true, rec: ans, out: "yay" });
    }).catch((err) => {
        console.log(err.message);
        // resp.send(err.message);
    })
}

function doLogin(req, resp) {
    SignupInfo.find({ email: req.body.email }).then((result) => {
        console.log(result[0]);
        if (result[0].password === req.body.password) {
            console.log("trueeeee");
            resp.json({ status: true, res: "password matches", type: result[0].utype});
        }
        else {
            console.log("password doesn't match");
            resp.json({ status: false, res: "password doesn't match" });
        }
    }).catch(function (err) {
        resp.json({ status: false, res: err.message });
    })
}

function doSave(req, resp) {
    let filename = "nopic.jpg";
    if (req.files != null) {
        filename = req.files.pic.name;
        var filepath = path.join(__dirname, "..", "uploads", filename);
        req.files.pic.mv(filepath);
    }
    req.body.picpath = filename;
    console.log(req.body);
    const info = new ProfileInfo(req.body);
    info.save().then((ans) => {
        console.log(ans);
        resp.set("json");
        resp.json({
            status: true,
            res: ans
        })
    }).catch((err) => {
        resp.json({
            status: false,
            error: err
        })
    })
}

function findd(req, resp) {
    ProfileInfo.find({ email: req.body.email }).then((result) => {
        resp.set("json");
        resp.json({ status: true, res: result });
    }).catch(function (err) {
        resp.json({ status: false, res: err.message });
    })
}

function doUpdate(req, resp) {
    let filename = "nopic.jpg";
    console.log(req.body);
    console.log(req.files);
    if (req.files != null) {
        filename = req.files.pic.name;
        console.log(filename);
        var filepath = path.join(__dirname, "..", "uploads", filename);
        req.files.pic.mv(filepath);
    }
    else {
        filename = req.body.hdn;
    }
    req.body.picpath = filename;
    resp.set("json");
    ProfileInfo.updateOne({ email: req.body.email }, { $set: req.body }).then((result) => {
        // User.updateOne({ email: req.body.email }, { $set: {fn:req.body.fn , ln:req.body.ln , address:req.body.address,  city:req.body.city ,  state:req.body.state,  country:req.body.country,  idproof:req.body.idproof,  picpath:req.body.picpath} }).then((result) => {
        console.log("here");
        resp.json({ status: true, res: result })
    }).catch(() => {
        resp.json({ status: false, error: err.message })
    })
}

function dofetchData(req, resp)
{
    // console.log(req.body.email);
    resp.set("json");
    ProductModel.find({cEmail:req.body.email}).then((result)=>{
        // console.log(result);
        resp.json({status:true , res:result});
    }).catch((err)=>{
        resp.json({status:false , error:err})
    })
}

module.exports = { doRequest , doLogin, doRegister ,findd , doSave , doUpdate , dofetchData , dofetchIncomingRequest};
