import "../setup.js";
import formsRepository from "../repositories/formsRepository.js";

const formId = process.env.FORM_ID as string;

async function getFormFromId() {
  const forms = await formsRepository.getFormFromId(formId);
  return forms;
}

export default { getFormFromId };
