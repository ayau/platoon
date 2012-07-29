{Server} = require('node-static');
http   = require('http')
fs     = require('fs')
io     = require('socket.io')


file = new Server './client/compiled'
server = http.createServer (request, response) ->
  request.addListener 'end', ->
    file.serve request, response

io.listen(server.listen 8080).sockets.on 'connection', (socket) ->
  socket.emit 'event',
    hello: 'world'
  socket.on 'log', (data) ->
    console.log data