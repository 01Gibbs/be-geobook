const mongoose = require("mongoose");

const GeoSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "Point",
  },
  coordinates: {
    type: [Number],
    index: "2dsphere",
  },
});
// location :{"type":"point", "coordinates":[-80.23, 24.87]}
const bookSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  author: {
    required: true,
    type: String,
  },
  genre: {
    required: true,
    type: String,
  },
  posted_by: {
    required: true,
    type: String,
  },
  location: GeoSchema,
  location_description: {
    required: true,
    type: String,
  },
});
module.exports = mongoose.model("Data", bookSchema);
