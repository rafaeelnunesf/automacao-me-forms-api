import auth from "../config/googleAuth.js";
import { google } from "googleapis";

async function getFormFromId(formId: string) {
  const forms = google.forms({
    version: "v1",
    auth,
  });

  const { data } = await forms.forms.responses.list({ formId });
  return data;
}

export default {
  getFormFromId,
};
