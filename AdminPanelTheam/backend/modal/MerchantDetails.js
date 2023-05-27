const mongoose = require('mongoose')
const MerchantDetailsSchema = new mongoose.Schema({
    CategoryName:{
        type: String,
        
    },

    Status:{
        type: String,
        
    },
    profilePic:{
    type:String
   },
})
module.exports = mongoose.model("MerchantDetails",MerchantDetailsSchema)