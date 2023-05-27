const mongoose = require('mongoose')

const affilSchema = new mongoose.Schema
({
    partnerName: { type:String,  },
    email: { type:String, },
    mobileNumber: { type:String,  },
    address: { type:String,  },
    coverageState: { type:String,  }, // s3 link
    commission: { type:String,  unique:false }, 
  
   profilePic:{
    type:String
   }
}  , {timestamps :true})


module.exports = mongoose.model("affil",affilSchema)



