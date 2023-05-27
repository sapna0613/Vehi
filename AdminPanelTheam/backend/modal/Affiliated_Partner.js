const mongoose = require('mongoose');

const Affiliated_PartnerSchema = new mongoose.Schema({
    CustomerName: { type: String },
    WalletBalance: { type: String },
    Country: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Affiliated_Partner', Affiliated_PartnerSchema);
