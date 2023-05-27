const mongoose = require('mongoose');

const DisputeManagerSchema = new mongoose.Schema({
    Name: { type: String  },
    Email:{type: String},
    Phone:{type: String},
    Roles: { type: String ,default: '1'},
    Status: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('DisputeManager', DisputeManagerSchema);
