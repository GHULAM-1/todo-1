"use strict";
const express = require("express");
const app = express();
const core = require("cors");
const PORT = 5000;
app.listen(PORT, () => {
    console.log("server running");
});
