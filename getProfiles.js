const express = require('express');
const router = express.Router();
const profiles = require('../data/profilesData');

// GET ALL PROFILES
router.get('/profiles', (req, res) => {
  res.json(profiles);
});

// GET PROFILE BY ID
router.get('/profiles/:id', (req, res) => {
  const profile = profiles.find(p => p.id === req.params.id);
  if (!profile) return res.status(404).json({ error: 'Profile not found' });
  res.json(profile);
});

module.exports = router;
