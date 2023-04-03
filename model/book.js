const mongoose =  require("mongoose");

const GeoSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
  },
  { _id: false }
);
// location :{"type":"point", "coordinates":[-80.23, 24.87]}
const bookSchema = new mongoose.Schema({
  _id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
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
  // created_at: {
  //   required: true,
  //   type: Date,
  // },
  location: GeoSchema,
  location_description: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("books", bookSchema);
