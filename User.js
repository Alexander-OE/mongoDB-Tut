const mongoose = require("'mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

module.export = mongoose.model("User", userSchema)