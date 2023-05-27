const mongoose = require('mongoose')
const CreateDisputeSchema = new mongoose.Schema({
    DisputeReason:{
        type: String,
        
    },
  
    status:{
        type :String,
       
    },
})
module.exports = mongoose.model("Dispute",CreateDisputeSchema)
