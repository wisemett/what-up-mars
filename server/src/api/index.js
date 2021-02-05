const express = require('express');

const emojis = require('./emojis');
const pymo = require('./pymo');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/pymo', pymo);

module.exports = router;
