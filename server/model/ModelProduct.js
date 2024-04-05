const mongoose = require("mongoose");
function getProductModel() {

    let signupSchema = mongoose.Schema(
        {
            email:{type:String , unique:true, required:true, index:true},
            password: String
        },
        {
            versionKey: false,
        }
    )
    let profileSchema = mongoose.Schema(
        {
            email:{type:String , unique:true, required:true, index:true},
            fn: String,
            ln: String,
            address: String,
            city: String,
            state: String,
            bloodgroup:String,
            aadharcardnumber:String,
            picpath:String
        },
        {
            versionKey: false,
        }
    )
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
    const SignupInfo = mongoose.model("SignupInfo", signupSchema);
    const ProfileInfo = mongoose.model("ProfileInfo" , profileSchema );
    
    return {ProductModel,SignupInfo,ProfileInfo};
}
module.exports = { getProductModel }



