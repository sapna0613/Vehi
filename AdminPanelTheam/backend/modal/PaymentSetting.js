
const mongoose = require('mongoose');

const PaymentSettingSchema = new mongoose.Schema({
    paymayaSecretKey: { type: String  },
    paymayaPublishKey:{type: String},
    gcashSecretKey:{type: String},
    gcashPublishKey: { type: String ,},
   
}, { timestamps: true });

module.exports = mongoose.model('PaymentSetting', PaymentSettingSchema);
