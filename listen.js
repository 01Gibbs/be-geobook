const app = require("./app.js");
require('dotenv').config({
  path: `.env`,
})

const mongoString = process.env.DATABASE_URL;

const mongoose = require("mongoose");

const { PORT = 9090 } = process.env;

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
