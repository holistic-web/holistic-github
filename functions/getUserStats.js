const functions = require("firebase-functions");
const GithubClient = require("./GithubClient");


module.exports = functions.https.onCall(async (userId) => {
  const ghClient = new GithubClient();
  const issues = await ghClient.getAllIssues(userId);
  const pullRequests = await ghClient.getAllPullRequests(userId);
  const user = await ghClient.getUser(userId);
  return {user, issues, pullRequests};
});

