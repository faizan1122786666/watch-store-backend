const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoute = require('./routes/contact');
const checkoutRoute = require('./routes/checkout');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'https://watchcollection001.netlify.app', // replace with your Netlify domain
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/contact', contactRoute);
app.use('/api/checkout', checkoutRoute);  // ✅ These must come BEFORE app.listen()

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

