const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    pattern: "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/",
  },
  name: { type: String, required: true },
  job: { type: String, required: true },
  phone: String,
  bio: String,
});

module.exports = mongoose.model("User", schema);
