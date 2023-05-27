const mongoose = require('mongoose');

const AccountManagerSchema = new mongoose.Schema({
    Name: { type: String  },
    Email:{type: String},
    Phone:{type: String},
    Roles: { type: String ,default: '1'},
    Status: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Account', AccountManagerSchema);
