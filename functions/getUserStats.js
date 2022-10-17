const functions = require("firebase-functions");
const {getAllIssues, getAllPullRequests} = require("./GithubClient");


module.exports = functions.https.onCall(async (userId) => {
  const issues = await getAllIssues(userId);
  const pullRequests = await getAllPullRequests(userId);
  return {issues, pullRequests};
});

