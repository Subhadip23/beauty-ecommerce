const Product = require("../models/Product");

// Add a new product (Admin Only)
exports.addProduct = async (req, res) => {
    try {
        const { name, description, images, sizes, stock, category } = req.body;

        const newProduct = new Product({
            name,
            description,
            images,
            sizes,
            stock,
            category,
        });

        await newProduct.save();
        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
