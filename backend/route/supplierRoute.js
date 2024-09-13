/*const express = require("express");
const router = express.Router();

const {
  getAllSuppliers,
  createSupplier,
  updateSupplier,
  deleteSupplier,
  getSupplierDetails,
} = require("../controller/supplierController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleWare/auth");

// Public Route: Get all suppliers
router.route("/supplier").get(getAllSuppliers);

// Admin Route: Create a new supplier
router.route("/admin/supplier/new").post(
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createSupplier
);

// Admin Route: Get all suppliers for admin
router.route("/admin/suppliers").get(
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllSuppliers
);

// Admin Route: Update and delete a specific supplier by ID
router
  .route("/admin/supplier/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateSupplier)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteSupplier);

// Public Route: Get details of a supplier by ID
router.route("/supplier/:id").get(getSupplierDetails);

module.exports = router;
*/