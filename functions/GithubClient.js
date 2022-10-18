const {Octokit} = require("octokit");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

module.exports = class GithubClient {
  constructor(token = GITHUB_TOKEN) {
    this.octokit = new Octokit({auth: token});
  }


  async getAllIssues(userId) {
    let hasMoreData = true;
    let page = 1;
    const issues = [];
    while (hasMoreData) {
      const response = await this.octokit.rest.search.issuesAndPullRequests({
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
  }

  async getAllPullRequests(userId) {
    let hasMoreData = true;
    let page = 1;
    const pullRequests = [];
    while (hasMoreData) {
      const response = await this.octokit.rest.search.issuesAndPullRequests({
        q: `is:pr author:${userId}`,
        per_page: 100,
        page,
      });
      pullRequests.push(...response.data.items);
      page++;
      if (response.data.items.length < 100) {
        hasMoreData = false;
      }
    }
    return pullRequests;
  }

  async getUser(userId) {
    const {data} = await this.octokit.request(`GET /users/${userId}`);
    return data;
  }
};
