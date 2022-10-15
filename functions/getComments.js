const functions = require("firebase-functions");

module.exports = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
