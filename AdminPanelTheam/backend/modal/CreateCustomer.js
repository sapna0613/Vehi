const mongoose = require('mongoose')
const CreateCustomerSchema = new mongoose.Schema({
    Name:{
        type: String,
        
    },
     MobileNumber:{
        type: Number,
        
       
    },
    EmailId:{
        type: String,
        
    },
    profilePic:{
    type:String
   },
})
module.exports = mongoose.model("CreateCustomer",CreateCustomerSchema)