const functions = require("firebase-functions");
// const Octokit = require("octokit");

// const octokit = new Octokit({auth: "personal-access-token123"});

module.exports = functions.https.onCall((userId) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  return `Hello from Firebase!, userId=${userId}`;
});
