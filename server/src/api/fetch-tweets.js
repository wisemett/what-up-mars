const needle = require('needle');
const fetchUserInfo = require('./fetch-user');

const bearerToken = process.env.BEARER_TOKEN;

const getPage = async (params, options, nextToken, url) => {
  if (nextToken) {
    params.next_token = nextToken;
  }

  try {
    const resp = await needle('get', url, params, options);

    if (resp.statusCode !== 200) {
      console.log(`${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`);
      return;
    }
    return resp.body;
  } catch (err) {
    throw new Error(`Request failed: ${err}`);
  }
};

const getUserTweets = async (userId) => {
  let userTweets = [];

  const url = `https://api.twitter.com/2/users/${userId}/tweets`;
  const params = {
    max_results: 5,
    'tweet.fields': 'created_at'
  };

  const options = {
    headers: {
      authorization: `Bearer ${bearerToken}`
    }
  };

  let hasNextPage = true;
  let nextToken = null;

  console.log('Retrieving Tweets...');

  while (hasNextPage) {
    const resp = await getPage(params, options, nextToken, url);
    if (
      resp
      && resp.meta
      && resp.meta.result_count
      && resp.meta.result_count > 0
    ) {
      if (resp.data) {
        userTweets = [...userTweets, resp.data];
      }
      if (resp.meta.next_token) {
        nextToken = resp.meta.next_token;
      }
    } else {
      hasNextPage = false;
    }
  }
  return userTweets;
};

getUserTweets(process.env.ELONMUSK);

module.exports = getUserTweets;
