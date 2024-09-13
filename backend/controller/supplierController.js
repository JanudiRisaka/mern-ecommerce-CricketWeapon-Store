/*const SupplierModel = require("../model/SupplierModel");
const ErrorHandler = require("../utils/errorHandler");
const asyncWrapper = require("../middleWare/asyncWrapper");
const ApiFeatures = require("../utils/apiFeatures");

// >>>>>>>>>>>>>>>>>>>>> Create Supplier (Admin Route) >>>>>>>>>>>>>>>>>>>>>>>>
exports.createSupplier = asyncWrapper(async (req, res) => {
  req.body.user = req.user.id; // Assign the user creating the supplier
  const data = await SupplierModel.create(req.body); // Create supplier entry in the database

  res.status(201).json({ success: true, data });
});

// >>>>>>>>>>>>>>>>>>>>> Get All Suppliers >>>>>>>>>>>>>>>>>>>>>>>>
exports.getAllSuppliers = asyncWrapper(async (req, res) => {
  const resultPerPage = 6; // Number of suppliers visible per page
  const suppliersCount = await SupplierModel.countDocuments(); // Get total number of suppliers

  // Create an instance of ApiFeatures for filtering and search
  const apiFeature = new ApiFeatures(SupplierModel.find(), req.query)
    .search() // Search filter based on query parameters
    .filter(); // Additional filtering based on query parameters

  let suppliers = await apiFeature.query; // Fetch suppliers based on filters and search
  let filteredSupplierCount = suppliers.length; // Get filtered suppliers count

  apiFeature.Pagination(resultPerPage); // Apply pagination

  // Fetch paginated suppliers
  suppliers = await apiFeature.query.clone(); // Use clone() to avoid executing the same query object twice

  res.status(200).json({
    success: true,
    suppliers,
    suppliersCount,
    resultPerPage,
    filteredSupplierCount,
  });
});

// >>>>>>>>>>>>>>>>>>>>> Get Supplier Details >>>>>>>>>>>>>>>>>>>>>>>>
exports.getSupplierDetails = asyncWrapper(async (req, res, next) => {
  const supplier = await SupplierModel.findById(req.params.id); // Find supplier by ID

  if (!supplier) {
    return next(new ErrorHandler("Supplier not found", 404)); // Error handling
  }

  res.status(200).json({
    success: true,
    supplier,
  });
});

// >>>>>>>>>>>>>>>>>>>>> Update Supplier (Admin Route) >>>>>>>>>>>>>>>>>>>>>>>>
exports.updateSupplier = asyncWrapper(async (req, res, next) => {
  let supplier = await SupplierModel.findById(req.params.id); // Find supplier by ID

  if (!supplier) {
    return next(new ErrorHandler("Supplier not found", 404));
  }

  supplier = await SupplierModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    supplier,
  });
});

// >>>>>>>>>>>>>>>>>>>>> Delete Supplier (Admin Route) >>>>>>>>>>>>>>>>>>>>>>>>
exports.deleteSupplier = asyncWrapper(async (req, res, next) => {
  const supplier = await SupplierModel.findById(req.params.id); // Find supplier by ID

  if (!supplier) {
    return next(new ErrorHandler("Supplier not found", 404));
  }

  await supplier.remove(); // Remove supplier from database

  res.status(200).json({
    success: true,
    message: "Supplier deleted successfully",
  });
});
*/