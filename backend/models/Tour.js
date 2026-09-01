const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  location: { type: String, required: true },
  duration: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  inclusions: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Tour', tourSchema);