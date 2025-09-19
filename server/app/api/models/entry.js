const mongoose = require('mongoose');

module.exports = mongoose.model("Entry", new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true, unique: true },
  details: { type: String, required: true },
  createdAt: { type: String, required: true }
}));
