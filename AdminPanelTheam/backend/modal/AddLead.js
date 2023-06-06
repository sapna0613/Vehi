const mongoose = require('mongoose');

const AddLeadSchema = new mongoose.Schema({
    CustomerName: { type: String },
    Societyname: { type: String },
    mobilenumber: { type: String },
    Status: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('AddLead', AddLeadSchema);
