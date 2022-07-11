const path = require("path");
const fs = require("fs");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/agenda", { useNewUrlParser: true })