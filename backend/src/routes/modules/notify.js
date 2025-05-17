const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/slack', async (req, res) => {
  const { webhookUrl, message } = req.body;
  try {
    await axios.post(webhookUrl, { text: message });
    res.json({ status: 'sent' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/telegram', async (req, res) => {
  const { botToken, chatId, message } = req.body;
  try {
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message
    });
    res.json({ status: 'sent' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;