const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
    empID: { type: String, unique: true },
    name: String,
    contact: String,
    position: String,
    hireDate: Date
  });
  module.exports = mongoose.model("EmployeeModel" , EmployeeSchema);