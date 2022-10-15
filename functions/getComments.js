const functions = require("firebase-functions");

module.exports = functions.https.onCall((userId) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  return `Hello from Firebase!, userId=${userId}`;
});
