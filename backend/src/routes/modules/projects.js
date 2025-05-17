const express = require('express');
const { Project } = require('../../models');
const router = express.Router();

router.get('/', async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Not authenticated' });
  const projects = await Project.findAll({ where: { UserId: req.session.user.id } });
  res.json(projects);
});

router.post('/', async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Not authenticated' });
  const { name, target } = req.body;
  const project = await Project.create({ name, target, UserId: req.session.user.id });
  res.json(project);
});

module.exports = router;