// Minimal user authentication with JWT tokens using Node.js and Express
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const secretKey = 'mySecretKey';
const users = [{ id: 1, username: 'user', password: 'pass' }];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).send('Invalid credentials');
  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
  res.send({ token });
});

app.get('/protected', authenticate, (req, res) => {
  res.send('Hello, authenticated user!');
});

function authenticate(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied');
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token');
  }
}

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));