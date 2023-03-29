import dotenv from 'dotenv'
dotenv.config({
    path: `.env`
  })
  const mongoString = process.env.DATABASE_URL;

import mongoose from 'mongoose'
import app from './index.js'

mongoose.connect(mongoString);
const database = mongoose.connection;

  database.on("error", (error) => {
    console.log(error);
  });
  
  database.once("connected", () => {
    console.log("Database Connected");
  });
  
  app.listen(3001, () => {
    console.log(`Server Started at ${3001}`);
  });