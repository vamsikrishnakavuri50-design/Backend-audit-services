const express = require("express");
const router = express.Router();
const Log = require("../models/Log");

router.get("/", async (req, res) => {
    try {
        const logs = await Log.find();
        res.json(logs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const log = new Log({
            action: req.body.action,
            username: req.body.username,
            status: req.body.status,
            timestamp: new Date()
        });

        const savedLog = await log.save();

        res.status(201).json(savedLog);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;