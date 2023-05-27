const mongoose = require('mongoose')
const BusinessStateSchema = new mongoose.Schema({
    BusinessState:{
        type: String,
        
    },
     Country:{
        type: String,
        
       
    },
    State:{
        type: String,
        
    },
    Status:{
        type :String,
       
    },
})
module.exports = mongoose.model("BusinessState",BusinessStateSchema)
