const functions = require("firebase-functions");
const {getAllIssues, getAllPullRequests, getUser} = require("./GithubClient");


module.exports = functions.https.onCall(async (userId) => {
  const issues = await getAllIssues(userId);
  const pullRequests = await getAllPullRequests(userId);
  const user = await getUser(userId);
  return {user, issues, pullRequests};
});

