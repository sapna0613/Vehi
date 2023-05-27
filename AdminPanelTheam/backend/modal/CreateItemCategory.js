const mongoose = require('mongoose')
const CreateItemCategorieschema = new mongoose.Schema({
    MerchantCategory:{
        type: String,
        
    },
    ItemCategoryName:{
        type: String,
        
       
    },
    Status:{
        type: String,
        
    },
    
})
module.exports = mongoose.model("CreateItemCategory",CreateItemCategorieschema)