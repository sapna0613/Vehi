const mongoose = require('mongoose')
const CreateSubscriptionCategorySchema = new mongoose.Schema({
    country:{
        type: String,
        
    },
    subscriptionPlan:{
        type: String,
        
       
    },
    commission:{
        type: String,
        
    },
    status:{
        type :String,
       
    },
})
module.exports = mongoose.model("CreateSubscriptionCategory",CreateSubscriptionCategorySchema)
