const mongoose = require('mongoose');

const MailConfigSchema = new mongoose.Schema({
    driver:{
        type: String,
        required : true
    },
    host:{
        type: String,
        required : true
    },
    port:{
        type: String,
        required : true
    },
    fromAddress:{
        type: String,
        required : true
    },
    password:{
        type: String,
        required : true
    },
    encryption:{
        type: String,
        required : true
    },
    domain2:{
        type: String,
        required : true
    },
    domain1:{
        type: String,
        required : true
    }

})
module.exports = mongoose.model("MailConfig",MailConfigSchema)
 

