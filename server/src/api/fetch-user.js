const needle = require('needle');

const token = process.env.BEARER_TOKEN;

const endpointURL = 'https://api.twitter.com/2/users/by?usernames=';

async function getRequest(userName) {
  const params = {
    usernames: userName, // Edit usernames to look up
    'user.fields': 'created_at,description' // Edit optional query parameters here
  };

  const res = await needle('get', endpointURL, params, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  if (res.body) {
    return res.body;
  }
  throw new Error('Unsuccessful request');
}

const fetchUser = async (userName) => {
  try {
    // Make request
    const response = await getRequest(userName);
    return response;
  } catch (e) {
    console.error(e);
  }
};

module.exports = fetchUser;
