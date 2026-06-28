const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// public ෆෝල්ඩර් එක සර්වර් එකට සම්බන්ධ කිරීම
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); 
    });
});

// Port 3000 හි සර්වර් එක ක්‍රියාත්මක කිරීම
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});