const mongoose = require("mongoose");

const SupplierSchema = new Schema({
    supplierID: { type: String, unique: true },
    name: String,
    contactNo: String,
    email: String,
    location: {
      street: String,
      province: String,
      district: String
    }
  });
  
  module.exports = mongoose.model("SupplierModel" , SupplierSchema);