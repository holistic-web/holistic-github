const functions = require("firebase-functions");
const {Octokit} = require("octokit");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const octokit = new Octokit({auth: GITHUB_TOKEN});

const getAllIssues = async (userId) => {
  let hasMoreData = true;
  const issues = [];
  while (hasMoreData) {
    const response = await octokit.rest.search.issuesAndPullRequests({
      q: `is:issue author:${userId}`,
      per_page: 100,
    });
    issues.push(...response.data.items);
    if (response.data.items.length < 100) {
      hasMoreData = false;
    }
  }
  return issues;
};

module.exports = functions.https.onCall(async (userId) => {
  const issues = await getAllIssues(userId);

  functions.logger.info("Hello logs!", {structuredData: true});
  return issues;
});

