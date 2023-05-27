const mongoose = require('mongoose')
const PromoCodeSchema = new mongoose.Schema({

    Country :{
        type: String,
    },
    State:{ 
    type: String,
},
City: {
    type: String,
},
PromoCode: {
    type: String,
},
PromoDescription: {
    type: String,
},
Percentage: {
    type: String,
},
MaxAmount: {
    type: String,
},
ExpirationDate: {
    type: String,
},
profilePic:{
    type: String,
}
})
module.exports = mongoose.model("PromoCode",PromoCodeSchema)
