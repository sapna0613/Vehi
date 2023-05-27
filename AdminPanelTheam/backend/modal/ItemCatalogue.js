const mongoose = require('mongoose')
const ItemCatalogueSchema = new mongoose.Schema({
    profilePic:{
        type: String,
        
    },
    ItemCategory:{
        type: String,
        
       
    },
    DisputeReason:{
        type: String,
        
    },
    
    ItemDescription:{
    type:String
   },
   Status:{
    type:String
   },
})

module.exports = mongoose.model("ItemCatalogue",ItemCatalogueSchema)