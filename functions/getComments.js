const functions = require("firebase-functions");

module.exports = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Headers", "content-type");

  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
