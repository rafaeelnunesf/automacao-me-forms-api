import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  keyFile: "./credentials.json",
  scopes: ["https://www.googleapis.com/auth/forms.responses.readonly"],
});

export default auth;
