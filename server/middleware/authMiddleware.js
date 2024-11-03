const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1]; // Expecting "Bearer <token>"

    if (!token) {
        return res.status(403).json({ message: "Access denied, no token provided" });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Store user info for use in route handlers
        next(); // Continue to the next middleware/route handler
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

// Middleware to check if the user is an admin
const authenticateAdmin = (req, res, next) => {
    authenticateToken(req, res, () => {
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Access denied. Admins only." });
        }
        next();
    });
};

module.exports = { authenticateToken, authenticateAdmin };
