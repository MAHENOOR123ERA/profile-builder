
const express = require('express');
const router = express.Router();

router.use(require('./getProfiles'));
router.use(require('./postProfiles'));
router.use(require('./updateProfiles'));
router.use(require('./deleteProfiles'));

module.exports = router;
