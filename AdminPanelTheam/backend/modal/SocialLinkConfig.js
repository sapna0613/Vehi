const mongoose = require('mongoose')
const SocialLinkSchema = new mongoose.Schema({

    googleClientId :{
        type: String,
    },
    facebookAppId:{ 
    type: String,
},

facebookAppSecret: {
    type: String,
},
socialLogin: {
    type: String,
},

})
module.exports = mongoose.model("SocialLink",SocialLinkSchema)
