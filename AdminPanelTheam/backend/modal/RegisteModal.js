const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const RegisterSchema = new mongoose.Schema({
 
    Name: { type: String },
    Email: { type: String },
    Phone: { type: String },
    userId: { type: String, unique: true },
    profilePic: { type: String },
    Type: { type: String },
    password: { type: String },
    Status: { type: String },
    joiningDate: { type: String },
}, { timestamps: true });

RegisterSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (err) {
      return next(err);
    }
  } else {
    next();
  }
});

module.exports = mongoose.model('Register', RegisterSchema);
