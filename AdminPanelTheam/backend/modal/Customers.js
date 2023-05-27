const mongoose = require('mongoose');

const CustomersSchema = new mongoose.Schema({
    CustomerName: { type: String },
    WalletBalance: { type: String },
    Country: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Customers', CustomersSchema);

