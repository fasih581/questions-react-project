const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
});

const RegModel = mongoose.model("Registration", RegistrationSchema);

module.exports = RegModel;
