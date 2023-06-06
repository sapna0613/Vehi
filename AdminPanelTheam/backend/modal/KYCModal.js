const mongoose = require('mongoose');

const KYCSchema = new mongoose.Schema({
  
  currentAddress: { type: String },
  permanentAddress: { type: String },
  state: { type: String },
  city: { type: String },
  aadharFront: { type: String },
  aadharBack: { type: String },
  policeVerification: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('KYC', KYCSchema);
