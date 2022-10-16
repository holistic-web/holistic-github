const {Octokit} = require("octokit");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const octokit = new Octokit({auth: GITHUB_TOKEN});

module.exports.getAllIssues = async (userId) => {
  let hasMoreData = true;
  let page = 1;
  const issues = [];
  while (hasMoreData) {
    const response = await octokit.rest.search.issuesAndPullRequests({
      q: `is:issue author:${userId}`,
      per_page: 100,
      page,
    });
    issues.push(...response.data.items);
    page++;
    if (response.data.items.length < 100) {
      hasMoreData = false;
    }
  }
  return issues;
};
