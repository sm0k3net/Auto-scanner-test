const express = require('express');
const { exec } = require('child_process');
const config = require('../../config/config.json');
const axios = require('axios');
const router = express.Router();

router.post('/nmap', async (req, res) => {
  const { target, ports } = req.body;
  const cmd = `${config.nmapPath} -p ${ports || '1-1000'} -T4 ${target}`;
  exec(cmd, (err, stdout, stderr) => {
    if (err) return res.status(500).json({ error: stderr });
    res.json({ result: stdout });
  });
});

router.post('/sublist3r', async (req, res) => {
  const { domain } = req.body;
  exec(`sublist3r -d ${domain} -o -`, (err, stdout, stderr) => {
    if (err) return res.status(500).json({ error: stderr });
    res.json({ result: stdout });
  });
});

router.post('/dnsrecon', async (req, res) => {
  const { domain } = req.body;
  exec(`dnsrecon -d ${domain}`, (err, stdout, stderr) => {
    if (err) return res.status(500).json({ error: stderr });
    res.json({ result: stdout });
  });
});

router.post('/gobuster', async (req, res) => {
  const { domain } = req.body;
  exec(`gobuster dns -d ${domain} -w /usr/share/wordlists/dirb/common.txt`, (err, stdout, stderr) => {
    if (err) return res.status(500).json({ error: stderr });
    res.json({ result: stdout });
  });
});

router.post('/whois', async (req, res) => {
  const { domain } = req.body;
  exec(`whois ${domain}`, (err, stdout, stderr) => {
    if (err) return res.status(500).json({ error: stderr });
    res.json({ result: stdout });
  });
});

router.post('/shodan', async (req, res) => {
  const { ip } = req.body;
  try {
    const resp = await axios.get(`https://api.shodan.io/shodan/host/${ip}?key=${config.shodanApiKey}`);
    res.json(resp.data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;