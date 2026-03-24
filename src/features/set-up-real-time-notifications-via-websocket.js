// Set up real-time notifications via WebSocket using Node.js and Express
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

http.listen(3000, () => {
  console.log('Server listening on port 3000');
});

setInterval(() => {
  io.emit('notification', 'New notification');
}, 5000);