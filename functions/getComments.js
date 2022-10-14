const functions = require("firebase-functions");

// search query to send to api: reactions:1..* author:dewinterjack created:>2020-04-29
let githubUser = 'dewinterjack';
const queryString = 'q=' + encodeURIComponent(`reactions:1..* author:${user} created:>${thisWeekDateTime}`);

// call reactions api on each item - get most used reactions from you/ on your comments?
// overview of peoples reactions to your stuff to make you feel good?
// https://docs.github.com/en/search-github/searching-on-github/searching-discussions#search-by-number-of-comments

module.exports = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
