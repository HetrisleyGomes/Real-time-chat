//npm init -y
//npm install express
// node ./servidor.js --watch
//npm install sockket.io
echo
const http = require('http')
const express = require('express')
const aplicacao = express();

const servidorhttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorhttp);

io.addListener('connection',(socket)=>{
    socket.addListener('nova mensagem', (msg)=>{
        io.emit('nova mensagem', msg);
    })
})

aplicacao.use(express.static('public'));

//                  Porta | IPv4
servidorhttp.listen(1500, '192.168.18.6');


