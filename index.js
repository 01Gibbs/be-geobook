require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const mongoString = process.env.DATABASE_URL;
const database = mongoose.connection;
const app = express();

mongoose.connect(mongoString);
app.use(express.json());
const routes = require('./routes/routes.js');

app.use('/api', routes)

app.listen(3001, () => {
  console.log(`Server Started at ${3001}`);
});

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});