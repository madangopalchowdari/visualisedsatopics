const express = require('express');
const QueueService = require('../service/queueService');

const queueService = new QueueService();
const router = express.Router();

router.post('/enqueue', (req, res) => {
  const { value } = req.body;
  try {
    const queue = queueService.enqueue(value);
    res.json({ queue });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/dequeue', (req, res) => {
  try {
    const queue = queueService.dequeue();
    res.json({ queue });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
