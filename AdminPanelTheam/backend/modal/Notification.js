const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema
({
    Title: { type:String,  },
    Description: { type:String, },
   
  
   profilePic:{
    type:String
   }
}  , {timestamps :true})


module.exports = mongoose.model("Notification",NotificationSchema)



