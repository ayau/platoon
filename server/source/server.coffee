
io = require('socket.io').listen(1337)

io.sockets.on('connection', (socket) ->
    socket.emit('news', { hello: 'world' })
    socket.on('my other event', (data) ->
        console.log(data);

var http = require('http');

(http.createServer (req, res) ->
    res.writeHead(200, Content-Type: 'text/plain')
    res.end('Hello World\n')
).listen(5000, '127.0.0.1')

console.log 'Server running at http://127.0.0.1:1337/'