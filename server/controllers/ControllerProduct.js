const { getProductModel } = require("../model/ModelProduct")
const  ProductModel = getProductModel();
const path = require("path");

function doRequest(req, resp) {
    console.log(req.body);
    const info = new ProductModel(req.body);
    info.save().then((ans) => {
        resp.json({ status: true, rec: ans, out: "yay" });
    }).catch((err) => {
        resp.json({
            status: false,
            error: err
        })
    })
}

module.exports = { doRequest};
