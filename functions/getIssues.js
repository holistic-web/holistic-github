const functions = require("firebase-functions");
const {Octokit} = require("octokit");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const octokit = new Octokit({auth: GITHUB_TOKEN});

const getIssues = async (userId) => {
  const response = await octokit.rest.search.issuesAndPullRequests({
    q:`is:issue author:${userId}`,
    per_page:100
  });
  return response.data.items
}

module.exports = functions.https.onCall(async (userId) => {
  const issues = await getIssues(userId);

  functions.logger.info("Hello logs!", {structuredData: true});
  return issues;
});

