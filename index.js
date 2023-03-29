import dotenv from 'dotenv'
import express from "express"
import mongoose from 'mongoose'
import routes from "./routes/routes.js"

dotenv.config({
  path: `.env`
})

const mongoString = process.env.DATABASE_URL;
const database = mongoose.connection;
const app = express();

mongoose.connect(mongoString);
app.use(express.json());


app.use("/api", routes);

app.listen(3001, () => {
  console.log(`Server Started at ${3001}`);
});

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
