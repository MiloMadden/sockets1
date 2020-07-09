// EXPRESS
const express = require('express');
const app = express();
//---------------------------------------
// PATH
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');

// PUERTO
const port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.static(publicPath));

//------------------------------------------------
// SOCKET Y HTTP
const socketIO = require('socket.io');
const http = require('http');

//------------------------------------------------
// SERVER
let server = http.createServer(app);

// esta es la comunicacion del backend - SOCKETS EN BACKEND
module.exports.io = socketIO(server);
require('./socket/socket');

//------------------------------------------------

// CORRER EN EL PUERTO
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});