const functions = require("firebase-functions");
const GithubClient = require("./GithubClient");
const {getProfileStats} = require("./githubAnalyser");

const ghClient = new GithubClient();

exports.getAllIssues = functions.https.onCall(async (userId) => {
  const issues = await ghClient.getAllIssues(userId);
  return issues;
});

exports.getAllPullRequests = functions.https.onCall(async (userId) => {
  const pullRequests = await ghClient.getAllPullRequests(userId);
  return pullRequests;
});

exports.getUser = functions.https.onCall(async (userId) => {
  const user = await ghClient.getUser(userId);
  return user;
});

exports.getProfileStats = functions.https.onCall(async (userId) => {
  const [issues, pullRequests] = await Promise.all([
    ghClient.getAllIssues(userId),
    ghClient.getAllPullRequests(userId),
  ]);
  return getProfileStats(issues, pullRequests);
});
