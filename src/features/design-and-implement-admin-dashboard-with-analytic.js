// Minimal admin dashboard with analytics using Node.js and Express
const express = require('express');
const app = express();
app.use(express.json());
const analytics = { users: 100, views: 500 };

app.get('/dashboard', (req, res) => {
  res.json(analytics);
});

app.get('/analytics', (req, res) => {
  res.json(analytics);
});

app.listen(3000, () => {
  console.log('Admin dashboard running on port 3000');
});