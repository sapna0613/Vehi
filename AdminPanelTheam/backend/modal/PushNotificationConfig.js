const mongoose = require('mongoose')
const PushNotificationConfigSchema = new mongoose.Schema({

    pushNotificationConfig :{
        type: String,
    },
   
})
module.exports = mongoose.model("PushNotificationConfig",PushNotificationConfigSchema)
