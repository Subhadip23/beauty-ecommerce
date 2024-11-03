const express = require("express");
const { addProduct, getProducts } = require("../controllers/productController");
const { authenticateToken, authenticateAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// Route to add a product (Admin only)
router.post("/add", authenticateAdmin, addProduct);

// Route to get all products (open to all users)
router.get("/", getProducts);

module.exports = router;
