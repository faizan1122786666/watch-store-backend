const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoute = require('./routes/contact');
const checkoutRoute = require('./routes/checkout');

dotenv.config();
const app = express();

// ✅ Correct port binding for Render
const PORT = process.env.PORT || 5000;

// ✅ Allow Netlify frontend
app.use(cors({
  origin: 'https://watchcollection001.netlify.app',
  methods: ['POST'],
  credentials: true
}));

app.use(express.json()); // ✅ Required to read JSON body

// ✅ Routes
app.use('/api/contact', contactRoute);
app.use('/api/checkout', checkoutRoute);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});