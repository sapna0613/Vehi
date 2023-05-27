const mongoose = require('mongoose')
const TaxSchema = new mongoose.Schema({
    
    Country:{
        type: String,
        
    },
    State:{
        type: String,
        
       
    },
    Tax:{
        type: String,
        
    },
   
})
module.exports = mongoose.model("BusinessTax",TaxSchema)
