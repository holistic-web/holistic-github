const functions = require("firebase-functions");
const {getAllIssues} = require("./GithubClient");


module.exports = functions.https.onCall(async (userId) => {
  const issues = await getAllIssues(userId);
  return {issues};
});

