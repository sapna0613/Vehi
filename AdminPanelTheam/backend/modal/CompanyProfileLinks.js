const mongoose = require('mongoose')
const CompanyProfileLinkSchema = new mongoose.Schema({
    facebookLink:{
        type: String,
        
    },
    twitterLink:{
        type: String,
        
       
    },
    instagramLink:{
        type: String,
        
    },
    pinterestLink:{
    type:String
   },
})
module.exports = mongoose.model("CompanyLink",CompanyProfileLinkSchema)