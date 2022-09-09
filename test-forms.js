const express = require("express");
const { google } = require("googleapis");

const app = express();

app.get("/responses", async (req, res) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "./credentials.json",
      scopes: ["https://www.googleapis.com/auth/forms.responses.readonly"],
    });

    const formId = "1GHMEqPQDknOkeUIMGoC7fJQDKEEB1R5UZ-q7qLsYOY4";
    const forms = google.forms({
      version: "v1",
      auth,
    });

    const { data } = await forms.forms.responses.list({ formId });

    res.status(200).send(data);
  } catch (error) {
    console.log(error.response.data);
    res.sendStatus(500);
  }
});

app.listen(4000, () => console.log("listening on port 4000"));
