const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
    action: String,
    username: String,
    status: String,
    timestamp: Date
});

module.exports = mongoose.model("Log", LogSchema);