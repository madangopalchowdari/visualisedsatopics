const express = require('express');
const ArrayService = require('../service/arrayService');

const arrayService = new ArrayService();
const router = express.Router();

router.post('/update', (req, res) => {
  const { index, value } = req.body;
  try {
    const array = arrayService.update(index, value);
    res.json({ array });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
