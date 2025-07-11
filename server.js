const checkoutRoute = require('./routes/checkout');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoute = require('./routes/contact');

dotenv.config();
const app = express(); 

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API route
app.use('/api/contact', contactRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.use('/api/checkout', checkoutRoute);

