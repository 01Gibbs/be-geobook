import mongoose from "mongoose"

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
  _id: {
    required: true,
    type: Number,
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

export default mongoose.model("books", bookSchema);
