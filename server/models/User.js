const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    otp: {
        type: String,
        required: false,
    },
    otpExpiry: {
        type: Date,
        required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);