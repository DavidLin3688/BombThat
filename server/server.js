// ====== MAGIC ======
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
// ===================

// Using port 6567, can change to whatever
// process.env.PORT is a variable set by hosting services (not used rn)
const port = process.env.PORT || 6567;
server.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

// Use client folder. Automatically uses index.html
app.use(express.static(__dirname + '/client'));

// Whenever a client connects
io.on('connection', socket => {
    console.log(`ID: ${socket.id} has joined.`);
    // When client disconnects
    socket.on('disconnect', () => {
        console.log(`ID: ${socket.id} has disconnected.`);
    });
    // NETWORKING CODE SHOULD GO IN HERE
    // ex. socket.on("playerMove", (x, y) => {
    //     move da player or something like that
    // })
});