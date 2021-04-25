var mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  userPassword: {
    type: String,
    required: true,
  }
});

const Users = mongoose.model('User', UserSchema);
module.exports = Users;
