var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minLength: 5,
    maxLength: 1024
  },
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    mingLength: 6,
    maxLength:12
  },
  userPassword: {
    type: String,
    required: true,
    minLength:5,
    maxLength: 12
  }
});



const Users = mongoose.model('User', UserSchema);
module.exports = Users;
