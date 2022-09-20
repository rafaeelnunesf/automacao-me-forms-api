import { Request, Response } from "express";
import httpStatus from "http-status";
import formsService from "../services/formsService.js";
async function getForm(req: Request, res: Response) {
  const forms = await formsService.getFormFromId();

  res.status(httpStatus.OK).send(forms);
}

export default { getForm };
