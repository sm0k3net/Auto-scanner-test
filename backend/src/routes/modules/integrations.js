const express = require('express');
const nodemailer = require('nodemailer');
const config = require('../../config/config.json');
const router = express.Router();

router.post('/smtp', async (req, res) => {
  const { to, subject, text } = req.body;
  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    auth: { user: config.smtp.user, pass: config.smtp.pass }
  });
  try {
    await transporter.sendMail({ from: config.smtp.user, to, subject, text });
    res.json({ status: 'sent' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;