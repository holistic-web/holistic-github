const functions = require("firebase-functions");
const {Octokit} = require("octokit");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const octokit = new Octokit({auth: GITHUB_TOKEN});

module.exports = functions.https.onCall(async (userId) => {
  const {
    data: {login},
  } = await octokit.rest.users.getAuthenticated();
  console.log("Hello, %s", login);

  functions.logger.info("Hello logs!", {structuredData: true});
  return {
    login,
    userId,
  };
});

