const express = require('express');
const router = express.Router();
const profiles = require('../data/profilesData');
const { updateProfileSchema } = require('../validation/profileValidation');

router.put('/profiles/:id', (req, res) => {
  const { error } = updateProfileSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const index = profiles.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Profile not found' });

  profiles[index] = { ...profiles[index], ...req.body };
  res.json(profiles[index]);
});

module.exports = router;
