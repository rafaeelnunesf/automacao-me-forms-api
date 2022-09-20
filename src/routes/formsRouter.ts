import { Router } from "express";

import formsController from "../controllers/formsController.js";

const formsRouter = Router();
formsRouter.get("/forms", formsController.getForm);

export default formsRouter;
