const mongoose =  require("mongoose")

const userSchema = new mongoose.Schema({
  _id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  username: {
    required: true,
    type: String,
  },
  firebase_id: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  claimed_books: {
    required: false,
    type: Array,
  },
});

module.exports = mongoose.model("users", userSchema);
