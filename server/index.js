const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const { handleMessage } = require('./conversation');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('User connected');
  socket.emit('botMessage', 'Welcome to the Traffic Law Chatbot! What do you want to know about German traffic laws?');

  socket.on('userMessage', (message) => {
    const response = handleMessage(message, socket.id);
    socket.emit('botMessage', response.message);
    if (response.followUp) {
      socket.emit('botMessage', response.followUp);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
