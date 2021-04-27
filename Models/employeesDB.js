var mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
  employeeEmail: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  employeeName: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  employeePassword: {
    type: String,
    required: true,
  }
});

const Employees = mongoose.model('Employee', EmployeeSchema);
module.exports = Employees;
