require('dotenv').config({
  path: `.env`,
})

const mongoString = process.env.DATABASE_URL;

const mongoose = require("mongoose")

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
