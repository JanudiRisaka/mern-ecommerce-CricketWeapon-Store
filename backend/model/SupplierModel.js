/*const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the supplier's name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter the supplier's email"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Please enter the supplier's phone number"],
  },
  address: {
    type: String,
    required: [true, "Please enter the supplier's address"],
  },
  productsSupplied: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "ProductModel", 
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SupplierModel", supplierSchema);
*/