var mongoose = require('mongoose');
const DealSchema = new mongoose.Schema({
  dealName: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  dealPicture: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  dealPrice: {
    type: String,
    required: true,
  },
  dealdescription: {
    type: String,
    required: true,
  }
});

const Deals = mongoose.model('Deal', DealSchema);
module.exports = Deals;
