const express = require('express');
const router = express.Router();
const profiles = require('../data/profilesData');

router.delete('/profiles/:id', (req, res) => {
  const index = profiles.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Profile not found' });

  profiles.splice(index, 1);
  res.json({ message: 'Profile deleted successfully' });
});

module.exports = router;
