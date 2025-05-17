const express = require('express');
const router = express.Router();
const auth = require('./modules/auth');
const reconnaissance = require('./modules/reconnaissance');
const vulnerabilityScanner = require('./modules/vulnerabilityScanner');
const exploitation = require('./modules/exploitation');
const reporting = require('./modules/reporting');
const projects = require('./modules/projects');
const integrations = require('./modules/integrations');
const notify = require('./modules/notify');

router.use('/auth', auth);
router.use('/recon', reconnaissance);
router.use('/scan', vulnerabilityScanner);
router.use('/exploit', exploitation);
router.use('/report', reporting);
router.use('/projects', projects);
router.use('/integrations', integrations);
router.use('/notify', notify);

module.exports = router;