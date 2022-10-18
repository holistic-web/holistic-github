const functions = require("firebase-functions");
const GithubClient = require("./GithubClient");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.getAllIssues = functions.https.onCall(async (userId) => {
  const ghClient = new GithubClient();
  const issues = await ghClient.getAllIssues(userId);
  return issues;
});

exports.getAllPullRequests = functions.https.onCall(async (userId) => {
  const ghClient = new GithubClient();
  const pullRequests = await ghClient.getAllPullRequests(userId);
  return pullRequests;
});

exports.getUser = functions.https.onCall(async (userId) => {
  const ghClient = new GithubClient();
  const user = await ghClient.getUser(userId);
  return user;
});
