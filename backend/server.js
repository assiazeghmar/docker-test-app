const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simple in-memory storage
let visitors = 0;

app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Hello from Dockerized Backend!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/visitors', (req, res) => {
  visitors++;
  res.json({ 
    visitors: visitors,
    message: `You are visitor number ${visitors}!`
  });
});

app.post('/api/echo', (req, res) => {
  res.json({
    received: req.body,
    echoedAt: new Date().toISOString()
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server running on port ${PORT}`);
});
module.exports = app;