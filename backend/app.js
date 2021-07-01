const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()).use(express.json()).use("/api", require("./src/routes/employee"));

module.exports = app;
