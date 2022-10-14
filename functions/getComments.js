const functions = require("firebase-functions");

module.exports = functions.https.onRequest((request, response) => {
  console.log("request: ", request);
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
