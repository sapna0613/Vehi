const mongoose = require('mongoose')
const GeneralSchema = new mongoose.Schema({

    SiteName :{
        type: String,
    },
    SiteIcon:{ 
    type: String,
},

FavIcon: {
    type: String,
},
SiteLogo: {
    type: String,
},
Number: {
    type: Number,
},
Email: {
    type: String,
},
Copyrightcontent: {
    type: String,
},
DefaultCountry: {
    type: String,
},
Currency: {
    type: String,
},
UnitMeasurement: {
    type: String,
},
LoyaltyPoint: {
    type: String,
}
})
module.exports = mongoose.model("GeneralSetUp",GeneralSchema)
