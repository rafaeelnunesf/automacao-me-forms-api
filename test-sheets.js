const express = require("express");
const { google } = require("googleapis");

const app = express();

async function getAuthSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await google.auth.getClient();

  const googleSheets = google.sheets({
    version: "v4",
    auth: client,
  });

  const spreadsheetId = "1dsecZ73iCiv4fohoFEguhQFESTFY_Oati-B0ZQa9HH8";

  return {
    auth,
    client,
    googleSheets,
    spreadsheetId,
  };
}

app.get("/metadata", async (req, res) => {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

  try {
    const metadata = await googleSheets.spreadsheets.get({
      auth,
      spreadsheetId,
    });

    res.status(200).send(metadata.data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(4000, () => console.log("listening on port 4000"));
