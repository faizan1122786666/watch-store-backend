
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please fill out all fields.' });
  }

  console.log('New contact form submitted:', { name, email, subject, message });

  return res.status(200).json({ message: 'Message received successfully!' });
});

module.exports = router;
