import "./setup.js";
import cors from "cors";
import express from "express";
import "express-async-errors";
import formsRouter from "./routes/formsRouter.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(formsRouter);
app.use(errorHandlerMiddleware);
export default app;
