const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.use("/logs", require("./routes/logs"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Log Service Running on Port ${PORT}`);
});