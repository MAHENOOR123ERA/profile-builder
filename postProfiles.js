const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const profiles = require('../data/profilesData');
const { profileSchema } = require('../validation/profileValidation');

router.post('/profiles', (req, res) => {
  const { error } = profileSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const newProfile = { id: uuidv4(), ...req.body };
  profiles.push(newProfile);

  res.status(201).json(newProfile);
});

module.exports = router;
