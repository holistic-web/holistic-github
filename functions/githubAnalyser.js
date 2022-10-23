module.exports.getProfileStats = async (issues, pullRequests) => {
  const issueStats = {
    empty: issues.filter((issue) => issue.body === "").length,
    closed: issues.filter((issue) => issue.state === "closed").length,
    open: issues.filter((issue) => issue.state === "open").length,
    count: issues.length,
  };
  const pullRequestStats = {
    empty: pullRequests.filter((pr) => pr.body === "").length,
    closed: pullRequests.filter((pr) => pr.state === "closed").length,
    open: pullRequests.filter((pr) => pr.state === "open").length,
    count: pullRequests.length,
  };
  return {
    issues: issueStats,
    pullRequests: pullRequestStats,
  };
};
