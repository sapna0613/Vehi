const mongoose = require('mongoose')
const MapAndSmsConfigSchema = new mongoose.Schema({

    searchRadius :{
        type: String,
    },
    browserMapKey:{ 
    type: String,
},

serverMapKey: {
    type: String,
},
smsProvider: {
    type: String,
},

twilioAutoToken :{
    type: String,
},
twilioAccountSID:{ 
type: String,
},

twilioFromNumber: {
type: String,
},
pubnubPublishKey: {
type: String,
},
pubnubSubscribeKey :{
    type: String,
},

})
module.exports = mongoose.model("MapAndSmsConfig",MapAndSmsConfigSchema)
