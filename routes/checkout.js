const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, phone, address, payment } = req.body;

  if (!name || !phone || !address || !payment) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  console.log('New Order:', { name, phone, address, payment });

  return res.status(200).json({ message: 'Order placed successfully!' });
});

module.exports = router;
