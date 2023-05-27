const mongoose = require('mongoose');

const MerchantSchema = new mongoose.Schema({
    CompanyName:{
        type: String,
        required : true
    },

    TradeName:{
        type: String,
        required : true
    },

    StoreAddress:{
        type: String,
        required : true
    },
    MerchantCategory:{
        type: String,
        required : true
    },
    EmailId:{
        type: String,
        required : true
    },
    MobileNumber:{
        type: String,
        required : true
    },
    CoverageState:{
        type: String,
        required : true
    },
    Country:{
        type: String,
        required : true
    },
    State:{
        type: String,
        required : true
    },
    City:{
        type: String,
        required : true
    },
    Commission:{
        type: String,
        required : true
    },
    DeliveryOptions:{
        type: String,
        required : true
    },
    Status:{
        type: String,
        required : true
    },
    profilePic:{
        type: String,
        
    }
    
})

module.exports = mongoose.model('MerchantDetail',MerchantSchema); 