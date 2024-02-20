const mongoose = require("mongoose");
function getProductModel() {
    let mySchema = mongoose.Schema(
        {
            pName: String,
            pAge: String,
            pGender: String,
            bloodGroup: String,
            pEmail: String,
            pPhone: String,
            pAddress: String,
            cName: String,
            cPhone: String,
            cGender: String,
            city: String,
            state: String,
            relation: String,
            message: String,
            cEmail: String,
            cAddress: String,
        },
        {
            versionKey: false,
        }
    )
    const ProductModel = mongoose.model("Information", mySchema);
    return ProductModel;
}
module.exports = { getProductModel }



