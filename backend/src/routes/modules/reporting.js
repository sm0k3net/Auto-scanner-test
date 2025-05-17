const express = require('express');
const { Project } = require('../../models');
const { Parser } = require('json2csv');
const router = express.Router();

router.get('/html/:projectId', async (req, res) => {
  const project = await Project.findByPk(req.params.projectId);
  if (!project) return res.status(404).send('Not found');
  res.send(`<html><body><h1>Отчет по проекту ${project.name}</h1><pre>${JSON.stringify(project.scanResults, null, 2)}</pre></body></html>`);
});

router.get('/csv/:projectId', async (req, res) => {
  const project = await Project.findByPk(req.params.projectId);
  if (!project) return res.status(404).send('Not found');
  const parser = new Parser();
  const csv = parser.parse(project.scanResults || {});
  res.header('Content-Type', 'text/csv');
  res.attachment('report.csv');
  res.send(csv);
});

router.get('/xml/:projectId', async (req, res) => {
  const project = await Project.findByPk(req.params.projectId);
  if (!project) return res.status(404).send('Not found');
  const xml = `<report><project>${project.name}</project><results>${JSON.stringify(project.scanResults)}</results></report>`;
  res.header('Content-Type', 'application/xml');
  res.send(xml);
});

module.exports = router;