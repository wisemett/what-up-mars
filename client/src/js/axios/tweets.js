const axios = require('axios');

const url = 'http://localhost:4967/api/v1/pymo/tweets';

const getTweets = async () => {
  const { data } = await axios.get(url);
  const [elonInfo, spaceInfo, elonTweets, spaceTweets] = [...data];

  return {
    elonInfo,
    elonTweets,
    spaceInfo,
    spaceTweets
  };
};

export default getTweets;
