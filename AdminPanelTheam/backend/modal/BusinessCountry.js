const mongoose = require('mongoose');

const BusinessCountrySchema = new mongoose.Schema({
    CountryName:{
        type: String,
        required : true
    },

    Currency:{
        type: String,
        required : true
    },

    CurrencySymbol:{
        type: String,
        required : true
    },
    Status:{
        type: String,
      
    }
})

module.exports = mongoose.model('AddBusinessCountry',BusinessCountrySchema); 

