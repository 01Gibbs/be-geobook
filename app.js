import express from "express";
import {
  handle500s,
  handleCustomError,
} from "./controllers/errors-controllers";
import apiRouter from "./routes/api-router";

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.use(handleCustomError);

app.use(handle500s);

export default app;
