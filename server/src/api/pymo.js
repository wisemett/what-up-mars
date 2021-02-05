const express = require('express');
const fetchUser = require('./fetch-user');
const fetchTweets = require('./fetch-tweets');

const router = express.Router();

let messages = [];

// get tweets
router.get('/tweets', async (_, res) => {
  try {
    const elonId = +process.env.ELONMUSK;
    const spaceId = +process.env.SPACEX;

    const { data: userElon } = await fetchUser('elonmusk');
    const { data: userSpace } = await fetchUser('SpaceX');
    const tweetElon = await fetchTweets(elonId);
    const tweetSpace = await fetchTweets(spaceId);

    res.json([...userElon, ...userSpace, ...tweetElon, ...tweetSpace]);
  } catch (error) {
    console.error(error);
  }
});

// get message
router.get('/message', async (req, res) => {
  try {
    res.json(messages);
  } catch (err) {
    console.error(err);
  }
})

// create message
router.post('/message', async (req, res) => {
  try {
    console.log(req.body);
    const msgInfo = req.body;
    messages = [msgInfo, ...messages];
    res.json(messages);
  } catch (error) {
    console.error(error);
  }
});
/* 

// READ ALL
router.get('/', async (req, res, next) => {
  try {
    const items = await pymoDB.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});



// Update One
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    // const value = await schema.validateAsync(req.body);
    const value = req.body;
    const item = await pymoDB.findOne({
      _id: id,
    });
    if (!item) return next();
    await pymoDB.update(
      {
        _id: id,
      },
      {
        $set: value,
      }
    );
    res.json(value);
  } catch (error) {
    next(error);
  }
});

// Delete One
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await pymoDB.remove({
      _id: id,
    });
    res.json({
      message: 'Success',
    });
  } catch (error) {
    next(error);
  }
}); */
module.exports = router;
